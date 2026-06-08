import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firebaseConfig = {
  apiKey: "AIzaSyC--Q8dDklMtRVrTkgczovpDPma28jq8xI",
  authDomain: "on-thi-vao-10-7d87c.firebaseapp.com",
  projectId: "on-thi-vao-10-7d87c",
  storageBucket: "on-thi-vao-10-7d87c.firebasestorage.app",
  messagingSenderId: "326319018998",
  appId: "1:326319018998:web:02bdb2d1afd36e218dedd7"
};

async function run() {
  const serviceAccountPath = "c:/on-thi-vao-10/functions/service-account.json";
  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: "on-thi-vao-10-7d87c"
  });

  const customToken = await admin.auth().createCustomToken("test-debug-user");

  const clientApp = initializeApp(firebaseConfig);
  const clientAuth = getAuth(clientApp);
  await signInWithCustomToken(clientAuth, customToken);

  const clientFunctions = getFunctions(clientApp);
  const callGeminiProxy = httpsCallable(clientFunctions, "callGeminiProxy");

  console.log("Calling callGeminiProxy...");
  const result = await callGeminiProxy({
    contents: [{ role: "user", parts: [{ text: "chào thầy" }] }],
    systemInstruction: "Bạn là một Gia sư AI.",
    useRag: false,
    subjectId: "math"
  });

  console.log("--- RESULT ---");
  console.log("typeof result:", typeof result);
  console.log("result keys:", Object.keys(result));
  console.log("typeof result.data:", typeof result.data);
  console.log("result.data structure:");
  console.dir(result.data, { depth: null });
  console.log("result.data.text:", result.data?.text);
  console.log("result.data.data:", result.data?.data);
}

run().catch(console.error);
