import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config Firebase Client (từ src/services/firebase.ts)
const firebaseConfig = {
  apiKey: "AIzaSyC--Q8dDklMtRVrTkgczovpDPma28jq8xI",
  authDomain: "on-thi-vao-10-7d87c.firebaseapp.com",
  projectId: "on-thi-vao-10-7d87c",
  storageBucket: "on-thi-vao-10-7d87c.firebasestorage.app",
  messagingSenderId: "326319018998",
  appId: "1:326319018998:web:02bdb2d1afd36e218dedd7"
};

async function run() {
  // 1. Khởi tạo Admin SDK để tạo Custom Token
  const serviceAccountPath = path.join(__dirname, "service-account.json");
  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: "on-thi-vao-10-7d87c"
  });

  const customToken = await admin.auth().createCustomToken("test-diagnostic-user", {
    email: "diagnostic@test.com"
  });
  console.log("Đã tạo Custom Token thành công.");

  // 2. Khởi tạo Client SDK và đăng nhập bằng Custom Token
  const clientApp = initializeApp(firebaseConfig);
  const clientAuth = getAuth(clientApp);
  await signInWithCustomToken(clientAuth, customToken);
  console.log("Đăng nhập Client thành công với User:", clientAuth.currentUser?.uid);

  // 3. Gọi Cloud Function
  const clientFunctions = getFunctions(clientApp);
  const callGeminiProxy = httpsCallable(clientFunctions, "callGeminiProxy");

  console.log("Đang gọi callGeminiProxy...");
  const params = {
    contents: [
      {
        role: "model",
        parts: [{ text: "Xin chào! Thầy là Gia sư AI ôn thi vào 10..." }]
      },
      {
        role: "user",
        parts: [{ text: "xin chào" }]
      }
    ],
    systemInstruction: "Bạn là một gia sư toán.",
    useRag: true,
    subjectId: "math"
  };

  try {
    const result = await callGeminiProxy(params);
    console.log("Kết quả nhận được từ Cloud Function:", JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("Lỗi khi gọi Cloud Function:", err);
  }
}

run().catch(console.error);
