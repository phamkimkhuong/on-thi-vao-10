import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getContentHash(content) {
  if (!content) return "";
  return crypto.createHash("md5").update(content).digest("hex");
}

// Hàm loại bỏ dấu tiếng Việt (đưa về ký tự không dấu)
function removeAccents(str) {
  if (!str) return "";
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d");
}

// Hàm trích xuất danh sách các từ khóa có nghĩa (hỗ trợ có dấu và không dấu)
function extractKeywords(text) {
  if (!text) return [];
  const cleanWithAccents = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'\[\]]/g, " ");
  const cleanNoAccents = removeAccents(cleanWithAccents);
  
  const wordsWithAccents = cleanWithAccents.split(/\s+/).filter(w => w.length >= 2);
  const wordsNoAccents = cleanNoAccents.split(/\s+/).filter(w => w.length >= 2);
  
  const combined = [...wordsWithAccents, ...wordsNoAccents];
  // Loại bỏ các từ trùng lặp và giới hạn tối đa 40 từ
  return [...new Set(combined)].slice(0, 40);
}

// 1. Đọc file env của functions để lấy API Key
function loadApiKey() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    throw new Error("Không tìm thấy file functions/.env để lấy API Key.");
  }
  const content = fs.readFileSync(envPath, "utf8");
  const match = content.match(/GEMINI_API_KEY\s*=\s*["']?(.*?)["']?(\s|$)/);
  if (!match || !match[1]) {
    throw new Error("Không tìm thấy biến GEMINI_API_KEY trong file functions/.env");
  }
  return match[1].trim();
}

// 2. Hàm gọi Gemini Embedding API (có hỗ trợ tự động retry khi gặp lỗi 429 Rate Limit)
async function getEmbedding(text, apiKey, retries = 5, delayMs = 3000) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "models/gemini-embedding-001",
          content: {
            parts: [{ text }]
          },
          outputDimensionality: 1536
        })
      });

      if (response.status === 429) {
        console.warn(`  [429 Rate Limit] Đang đợi ${delayMs / 1000}s trước khi thử lại lần ${attempt}/${retries}...`);
        await new Promise(resolve => setTimeout(resolve, delayMs));
        delayMs *= 2; // Tăng dần thời gian chờ
        continue;
      }

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Lỗi tạo embedding: ${errText}`);
      }

      const data = await response.json();
      return data?.embedding?.values;
    } catch (err) {
      if (attempt === retries) {
        throw err;
      }
      console.warn(`  [Lỗi kết nối] ${err.message}. Đang thử lại sau ${delayMs / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, delayMs));
      delayMs *= 2;
    }
  }
}

// 3. Hàm phụ trợ loại bỏ cú pháp TypeScript để import dạng JS
function parseTsFileToJs(tsFilePath, tempJsFileName) {
  const rawCode = fs.readFileSync(tsFilePath, "utf8");
  const tsFileDir = path.dirname(tsFilePath);
  
  // 1. Tìm các câu lệnh import JSON và thay thế bằng việc đọc file trực tiếp
  let jsCode = rawCode.replace(/import\s+(\w+)\s+from\s+['"](.*\.json)['"];?/g, (match, varName, jsonPath) => {
    const absoluteJsonPath = path.resolve(tsFileDir, jsonPath).replace(/\\/g, '/');
    return `const ${varName} = JSON.parse(fs.readFileSync("${absoluteJsonPath}", "utf8"));`;
  });

  // 2. Loại bỏ các câu lệnh import khác
  jsCode = jsCode.replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "");
  
  // 3. Loại bỏ khai báo kiểu TypeScript
  jsCode = jsCode.replace(/:\s*\w+(\[\])?(?=\s*=)/g, "");
  
  // 4. Loại bỏ các từ khóa ép kiểu "as Topic[]" hoặc "as const"
  jsCode = jsCode.replace(/\s+as\s+[A-Za-z0-9_<>\[\]]+/g, "");

  // 5. Chèn thêm import fs để chạy được việc đọc JSON
  jsCode = `import fs from 'fs';\nimport path from 'path';\n` + jsCode;
  
  const tempPath = path.join(__dirname, tempJsFileName);
  fs.writeFileSync(tempPath, jsCode, "utf8");
  return tempPath;
}

async function run() {
  const apiKey = loadApiKey();
  console.log("Đã đọc thành công Gemini API Key.");

  // 4. Khởi tạo Firebase Admin SDK
  const projectId = "on-thi-vao-10-7d87c";
  const serviceAccountPath = path.join(__dirname, "service-account.json");

  if (process.env.FIRESTORE_EMULATOR_HOST) {
    console.log(`[Emulator] Đang kết nối tới Firestore Emulator tại: ${process.env.FIRESTORE_EMULATOR_HOST}`);
    admin.initializeApp({
      projectId: projectId
    });
  } else if (fs.existsSync(serviceAccountPath)) {
    console.log("[Production] Đang kết nối tới Firestore Production bằng Service Account...");
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: projectId
    });
  } else {
    console.log("[Production] Đang kết nối tới Firestore Production bằng mặc định (ADC)...");
    admin.initializeApp({
      projectId: projectId
    });
  }

  const db = admin.firestore();
  const collectionRef = db.collection("knowledge_base");

  // 5. Chuyển đổi và Import dữ liệu từ src/data
  console.log("\n--- BẮT ĐẦU ĐỌC DỮ LIỆU TỪ SRC/DATA ---");
  
  const mathTsPath = path.resolve(__dirname, "../src/data/mathData.ts");
  const engQTypesTsPath = path.resolve(__dirname, "../src/data/english/questionTypes.ts");
  const math10QTypesTsPath = path.resolve(__dirname, "../src/data/grade10/math/questionTypes.ts");
  const eng10QTypesTsPath = path.resolve(__dirname, "../src/data/grade10/english/questionTypes.ts");
  const chem10QTypesTsPath = path.resolve(__dirname, "../src/data/grade10/chemistry/questionTypes.ts");

  const tempMathJs = parseTsFileToJs(mathTsPath, "temp_math.js");
  const tempEngQTypesJs = parseTsFileToJs(engQTypesTsPath, "temp_eng_qtypes.js");
  const tempMath10QTypesJs = parseTsFileToJs(math10QTypesTsPath, "temp_math10_qtypes.js");
  const tempEng10QTypesJs = parseTsFileToJs(eng10QTypesTsPath, "temp_eng10_qtypes.js");
  const tempChem10QTypesJs = parseTsFileToJs(chem10QTypesTsPath, "temp_chem10_qtypes.js");

  // Import động các file JS tạm thời
  const { mathQuestionTypes } = await import("./temp_math.js");
  const { englishQuestionTypes } = await import("./temp_eng_qtypes.js");
  const { g10MathQuestionTypes } = await import("./temp_math10_qtypes.js");
  const { g10EnglishQuestionTypes } = await import("./temp_eng10_qtypes.js");
  const { g10ChemistryQuestionTypes } = await import("./temp_chem10_qtypes.js");

  console.log(`Đã đọc:
- Lớp 9: ${mathQuestionTypes.length} dạng Toán, ${englishQuestionTypes.length} dạng Anh.
- Lớp 10: ${g10MathQuestionTypes.length} dạng Toán, ${g10EnglishQuestionTypes.length} dạng Anh, ${g10ChemistryQuestionTypes.length} dạng Hóa.`);

  const allQuestionTypes = [
    ...mathQuestionTypes.map(q => ({ ...q, subjectId: "math" })),
    ...englishQuestionTypes.map(q => ({ ...q, subjectId: "english" })),
    ...g10MathQuestionTypes.map(q => ({ ...q, subjectId: "math" })),
    ...g10EnglishQuestionTypes.map(q => ({ ...q, subjectId: "english" })),
    ...g10ChemistryQuestionTypes.map(q => ({ ...q, subjectId: "chemistry" }))
  ];

  for (const qType of allQuestionTypes) {
    const subjectName = qType.subjectId === "math" ? "Toán" : qType.subjectId === "chemistry" ? "Hóa học" : "Tiếng Anh";
    console.log(`\nĐang xử lý dạng bài: "${qType.name}" (${subjectName})...`);

    // 5.1 Xóa tài liệu lớn cũ (nếu có) để dọn dẹp database
    const oldDocId = `${qType.subjectId}_${qType.id}`;
    await collectionRef.doc(oldDocId).delete().catch(() => {});

    // Helper tạo và lưu từng chunk nhỏ (hỗ trợ kiểm tra trùng lặp và cập nhật tri thức thay đổi)
    const saveChunk = async (chunkId, chunkType, chunkTitle, chunkContent) => {
      try {
        const currentHash = getContentHash(chunkContent);

        // Kiểm tra xem tài liệu này đã tồn tại trên Firestore chưa
        const docSnap = await collectionRef.doc(chunkId).get();
        if (docSnap.exists) {
          const existingData = docSnap.data();
          if (existingData && existingData.contentHash === currentHash) {
            console.log(`  - Bỏ qua: Chunk [${chunkType}] đã tồn tại và không thay đổi (${chunkId})`);
            return;
          }
          console.log(`  - Cập nhật: Phát hiện thay đổi nội dung tại chunk [${chunkType}] (${chunkId}). Đang tạo lại embedding...`);
        }

        const embedding = await getEmbedding(chunkContent, apiKey);
        if (!embedding || embedding.length === 0) {
          console.error(`  - Thất bại: Không nhận được vector embedding cho chunk [${chunkType}].`);
          return;
        }

        // Trích xuất các từ khóa phục vụ cho Hybrid Search (kết hợp title của chunk và tên dạng bài lớn)
        const cleanTextForKeywords = `${chunkTitle} ${qType.name}`;
        const keywords = extractKeywords(cleanTextForKeywords);

        await collectionRef.doc(chunkId).set({
          subjectId: qType.subjectId,
          parentId: qType.id,
          parentTitle: qType.name,
          chunkType: chunkType,
          difficulty: qType.difficulty || "medium",
          title: chunkTitle,
          content: chunkContent,
          contentHash: currentHash, // Lưu lại mã băm nội dung để so sánh lần sau
          keywords: keywords,
          embedding: admin.firestore.FieldValue.vector(embedding),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`  - Thành công: Đã ghi chunk [${chunkType}] với ID: ${chunkId} (${keywords.length} keywords, difficulty: ${qType.difficulty || "medium"})`);
      } catch (err) {
        console.error(`  - Lỗi khi ghi chunk [${chunkType}] ${chunkId}:`, err.message);
      }
    };

    // 5.2 Sinh chunk Overview (Khái quát & Nhận diện)
    const overviewContent = `DẠNG BÀI: ${qType.name} (Môn: ${subjectName})
Mô tả chuyên đề: ${qType.description}

Dấu hiệu nhận biết dạng bài này:
${qType.recognitionSigns && qType.recognitionSigns.length > 0 ? qType.recognitionSigns.map(s => `- ${s}`).join("\n") : "- Không có"}`;
    
    await saveChunk(
      `${qType.subjectId}_${qType.id}_overview`,
      "overview",
      `[Tổng quan] ${qType.name}`,
      overviewContent
    );

    // 5.3 Sinh chunk Method (Các bước giải chi tiết)
    if (qType.solvingSteps && qType.solvingSteps.length > 0) {
      const methodContent = `PHƯƠNG PHÁP GIẢI DẠNG BÀI: ${qType.name} (Môn: ${subjectName})
Các bước giải chi tiết:
${qType.solvingSteps.map((s, idx) => `${idx + 1}. ${s}`).join("\n")}`;

      await saveChunk(
        `${qType.subjectId}_${qType.id}_method`,
        "method",
        `[Phương pháp giải] ${qType.name}`,
        methodContent
      );
    }

    // 5.4 Sinh chunk Mistakes (Các lỗi thường gặp)
    if (qType.commonMistakes && qType.commonMistakes.length > 0) {
      const mistakesContent = `CẢNH BÁO LỖI THƯỜNG GẶP của dạng bài: ${qType.name} (Môn: ${subjectName})
Các lỗi học sinh dễ mắc sai lầm:
${qType.commonMistakes.map(s => `- ${s}`).join("\n")}`;

      await saveChunk(
        `${qType.subjectId}_${qType.id}_mistakes`,
        "mistakes",
        `[Cảnh báo lỗi sai] ${qType.name}`,
        mistakesContent
      );
    }

    // 5.5 Sinh chunk Examples (Từng phân dạng con & Ví dụ mẫu)
    if (qType.subTypes && qType.subTypes.length > 0) {
      for (let idx = 0; idx < qType.subTypes.length; idx++) {
        const sub = qType.subTypes[idx];
        const exampleContent = `PHÂN DẠNG BÀI TẬP: ${sub.name} (Thuộc dạng bài lớn: ${qType.name})
Ví dụ mẫu: ${sub.example}
Hướng dẫn/Lưu ý đặc biệt: ${sub.note || "Không có"}`;

        await saveChunk(
          `${qType.subjectId}_${qType.id}_sub_${idx}`,
          "example",
          `[Ví dụ & Phân dạng] ${qType.name} -> ${sub.name}`,
          exampleContent
        );
      }
    }
  }

  // Dọn dẹp các file tạm thời
  try {
    fs.unlinkSync(tempMathJs);
    fs.unlinkSync(tempEngQTypesJs);
    fs.unlinkSync(tempMath10QTypesJs);
    fs.unlinkSync(tempEng10QTypesJs);
    fs.unlinkSync(tempChem10QTypesJs);
    console.log("\n Đã dọn dẹp các file biên dịch tạm thời.");
  } catch (err) {
    console.error("Lỗi khi dọn dẹp file tạm:", err.message);
  }

  console.log("\n Hoàn thành đồng bộ toàn bộ tri thức từ src/data lên Firestore!");
}

run().catch(console.error);
