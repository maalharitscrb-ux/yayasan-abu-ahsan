# Website Yayasan Abu Ahsan dengan login admin

Isi folder:
- `index.html`: website publik.
- `admin.html`: halaman login dan edit untuk admin (pengurus, siswa/i, jadwal).
- `firebase-config.js`: tempat menempel konfigurasi Firebase.
- `firebase-public.js`: memuat data untuk website publik.
- `firestore.rules`: aturan keamanan (semua orang boleh membaca data website, hanya admin yang boleh mengubah).

## Langkah pemasangan (sekitar 15 menit)

1. Buka https://console.firebase.google.com, masuk dengan akun Google, lalu **Add project** (nama bebas, Google Analytics boleh dimatikan).
2. **Build > Authentication > Get started > Sign-in method > Email/Password > Enable**.
3. Masih di Authentication, tab **Users > Add user**. Isi email dan kata sandi admin. Salin **User UID** akun itu.
4. **Build > Firestore Database > Create database**. Pilih lokasi terdekat (misalnya `asia-southeast2` Jakarta), mulai dengan mode produksi.
5. Di Firestore, tab **Rules**: tempel isi `firestore.rules`, ganti `GANTI_UID_ADMIN` dengan UID dari langkah 3, lalu **Publish**.
6. **Project settings (ikon roda gigi) > General > Your apps > ikon web `</>`**. Daftarkan aplikasi, lalu salin nilai `firebaseConfig` ke `firebase-config.js`.
7. Unggah semua file ke hosting (cPanel, Cloudflare Pages, Netlify, atau Firebase Hosting). File harus berada di folder yang sama.
8. Buka `alamat-website/admin.html`, masuk, isi data, lalu tekan **Simpan ke website**.
9. Di Authentication > Settings > Authorized domains, pastikan domain website Anda terdaftar (domain hosting Firebase sudah otomatis).

## Catatan keamanan dan privasi

- Kata sandi tidak pernah disimpan di file website. Login dikelola Firebase.
- Untuk menambah admin lain, tambahkan akun di Authentication lalu ubah fungsi `isAdmin()` di aturan Firestore agar mengenali UID tambahan.
- Daftar lengkap siswa/i disimpan di tempat yang hanya bisa dibaca admin. Website hanya menampilkan nama kalau kotak "Tampilkan nama siswa/i di website" dicentang. Kalau tidak, yang tampil hanya jumlah per paket.
- Gunakan kata sandi admin yang panjang dan jangan dibagikan.
