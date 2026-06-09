import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { PayOS } from "@payos/node";

initializeApp();

export const db = getFirestore();

export const DAILY_REQUEST_LIMIT = 100;

// Initialize PayOS client
let payOSInstance: PayOS | null = null;
if (
  process.env.PAYOS_CLIENT_ID &&
  process.env.PAYOS_API_KEY &&
  process.env.PAYOS_CHECKSUM_KEY
) {
  payOSInstance = new PayOS({
    clientId: process.env.PAYOS_CLIENT_ID,
    apiKey: process.env.PAYOS_API_KEY,
    checksumKey: process.env.PAYOS_CHECKSUM_KEY,
  });
}

export const payOS = payOSInstance;
