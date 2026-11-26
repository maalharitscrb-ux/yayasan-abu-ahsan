// Konfigurasi Firebase proyek "Yayasan Abu Ahsan Cirebon".
// Nilai ini boleh terlihat publik. Keamanan data diatur oleh aturan Firestore (firestore.rules), bukan oleh file ini.
export const firebaseConfig = {
  apiKey: "AIzaSyDcuoqiMyv7g_SPyv13Rr2aDLuMdkFB7JA",
  authDomain: "yayasan-abu-ahsan-cirebon.firebaseapp.com",
  projectId: "yayasan-abu-ahsan-cirebon",
  storageBucket: "yayasan-abu-ahsan-cirebon.firebasestorage.app",
  messagingSenderId: "21332114643",
  appId: "1:21332114643:web:b39bb6506d91d03e756826"
};

export function configReady() {
  return typeof firebaseConfig.apiKey === "string" && !firebaseConfig.apiKey.startsWith("GANTI");
}
