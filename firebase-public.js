// Memuat data dari Firebase untuk halaman publik (index.html).
// pkbm/data: pengurus, jadwal PKBM, siswa. pkbm/site: teks, kontak, agenda, pengumuman.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig, configReady } from "./firebase-config.js";

(async function () {
  if (!configReady()) return;
  let db;
  try {
    db = getFirestore(initializeApp(firebaseConfig));
  } catch (err) {
    console.warn("Firebase belum bisa dimulai:", err);
    return;
  }
  try {
    const snap = await getDoc(doc(db, "pkbm", "data"));
    if (snap.exists() && typeof window.renderPkbm === "function") window.renderPkbm(snap.data());
  } catch (err) {
    console.warn("Data PKBM belum bisa dimuat:", err);
  }
  try {
    const snap = await getDoc(doc(db, "pkbm", "site"));
    if (snap.exists() && typeof window.renderSite === "function") window.renderSite(snap.data());
  } catch (err) {
    console.warn("Data website belum bisa dimuat:", err);
  }
  try {
    const snap = await getDocs(query(collection(db, "galeri"), orderBy("createdAt", "desc"), limit(24)));
    if (typeof window.renderGaleri === "function") window.renderGaleri(snap.docs.map((d) => d.data()));
  } catch (err) {
    console.warn("Galeri belum bisa dimuat:", err);
  }
})();
