// Memuat data PKBM dari Firebase untuk halaman publik (index.html).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig, configReady } from "./firebase-config.js";

(async function () {
  if (!configReady() || typeof window.renderPkbm !== "function") return;
  try {
    const db = getFirestore(initializeApp(firebaseConfig));
    const snap = await getDoc(doc(db, "pkbm", "data"));
    if (snap.exists()) window.renderPkbm(snap.data());
  } catch (err) {
    console.warn("Data PKBM belum bisa dimuat:", err);
  }
})();
