// Daftar teks yang bisa diubah dari halaman admin.
// "def" harus sama dengan teks bawaan di index.html. Admin memakainya sebagai isian awal.
// Teks yang tidak diubah tidak disimpan, jadi website tetap memakai teks di index.html.

export const GROUPS = [
  {
    id: "beranda", title: "Beranda",
    fields: [
      { key: "hero_eyebrow", label: "Teks kecil di atas judul", def: "Kota Cirebon" },
      { key: "hero_title", label: "Judul utama", def: "Yayasan Abu Ahsan Cirebon" },
      { key: "hero_sub", label: "Kalimat pengantar", def: "Yayasan yang bergerak di bidang pendidikan, dakwah, dan pembinaan pemuda bagi masyarakat Cirebon.", long: true },
      { key: "hero_cta", label: "Tulisan tombol pendaftaran", def: "Pendaftaran PKBM 2026/2027" }
    ]
  },
  {
    id: "tentang", title: "Tentang kami",
    fields: [
      { key: "about_title", label: "Judul", def: "Pendidikan, dakwah, dan pembinaan pemuda dalam satu yayasan" },
      { key: "about_p1", label: "Paragraf 1", def: "Yayasan Abu Ahsan Cirebon mengelola tiga kegiatan utama: PKBM, Majelis Taklim, dan Pembinaan Pemuda.", long: true },
      { key: "about_p2", label: "Paragraf 2", def: "Kami terbuka bagi warga yang ingin belajar, mengaji, dan berkegiatan.", long: true },
      { key: "fact1_title", label: "Kotak ringkas 1, judul", def: "3 kegiatan" },
      { key: "fact1_text", label: "Kotak ringkas 1, keterangan", def: "PKBM, Majelis Taklim, Pembinaan Pemuda" },
      { key: "fact2_title", label: "Kotak ringkas 2, judul", def: "Harjamukti, Cirebon" },
      { key: "fact2_text", label: "Kotak ringkas 2, keterangan", def: "Argasunya, Kota Cirebon 45145" }
    ]
  },
  {
    id: "kegiatan", title: "Kegiatan",
    fields: [
      { key: "kegiatan_title", label: "Judul bagian", def: "Tiga kegiatan yayasan" },
      { key: "kegiatan_lead", label: "Kalimat pengantar", def: "Setiap kegiatan disusun untuk menjawab kebutuhan warga: belajar, beribadah, dan tumbuh sebagai generasi muda.", long: true },
      { key: "card1_title", label: "Kegiatan 1, nama", def: "PKBM" },
      { key: "card1_text", label: "Kegiatan 1, uraian", def: "PKBM Salafiyatul Huda adalah Pusat Kegiatan Belajar Masyarakat yang membuka Paket B setara SMP dan Paket C setara SMA. Penerimaan siswa baru TP 2026/2027 sedang dibuka.", long: true },
      { key: "card1_tag", label: "Kegiatan 1, label status", def: "Pendaftaran dibuka" },
      { key: "card2_title", label: "Kegiatan 2, nama", def: "Majelis Taklim" },
      { key: "card2_text", label: "Kegiatan 2, uraian", def: "Pengajian dan kajian keislaman untuk masyarakat sekitar. Jadwal, tema, dan pemateri akan diumumkan di halaman ini dan di Instagram yayasan.", long: true },
      { key: "card2_tag", label: "Kegiatan 2, label status", def: "Jadwal segera diumumkan" },
      { key: "card3_title", label: "Kegiatan 3, nama", def: "Pembinaan Pemuda" },
      { key: "card3_text", label: "Kegiatan 3, uraian", def: "Kegiatan keislaman dan kepemimpinan bagi pemuda, untuk belajar agama, berorganisasi, dan melatih kepemimpinan. Informasi kegiatan juga dibagikan lewat akun @genmi.id.", long: true },
      { key: "card3_tag", label: "Kegiatan 3, label status", def: "Keislaman & kepemimpinan" }
    ]
  },
  {
    id: "pkbm", title: "Pendaftaran PKBM",
    fields: [
      { key: "pkbm_heading", label: "Judul pendaftaran", def: "Penerimaan siswa baru Tahun Pelajaran 2026/2027" },
      { key: "pkbm_lead", label: "Keterangan pendaftaran", def: "PKBM Salafiyatul Huda (SDN Majasem 2) terakreditasi C. Pilih paket sesuai jenjang yang ingin Anda tempuh, lalu hubungi panitia untuk syarat dan jadwal pendaftaran.", long: true },
      { key: "ppdb_title", label: "Kotak daftar, judul", def: "Daftar sekarang" },
      { key: "ppdb_text", label: "Kotak daftar, keterangan", def: "Hubungi panitia lewat WhatsApp. Kami akan menjawab pertanyaan seputar syarat, biaya, dan jadwal belajar.", long: true },
      { key: "paket_b_title", label: "Paket pertama, nama", def: "Paket B" },
      { key: "paket_b_text", label: "Paket pertama, keterangan", def: "Setara SMP" },
      { key: "paket_c_title", label: "Paket kedua, nama", def: "Paket C" },
      { key: "paket_c_text", label: "Paket kedua, keterangan", def: "Setara SMA" },
      { key: "lokasi_text", label: "Lokasi belajar", def: "Jl. Perjuangan No. 32 Majasem, Kel. Karyamulya, Kec. Kesambi, Kota Cirebon", long: true }
    ]
  },
  {
    id: "kontak", title: "Kontak dan media sosial",
    fields: [
      { key: "alamat", label: "Alamat yayasan", def: "BTN Griya Bintang E2 Kedung Mendeng, Argasunya, Harjamukti, Kota Cirebon 45145", long: true },
      { key: "wa1_name", label: "Kontak 1, nama", def: "Abu Ahsan" },
      { key: "wa1_number", label: "Kontak 1, nomor WhatsApp", def: "0852 8661 2475", hint: "Tulis dengan awalan 0 atau 62. Tautan WhatsApp dibuat otomatis." },
      { key: "wa2_name", label: "Kontak 2, nama", def: "M. Ahsan" },
      { key: "wa2_number", label: "Kontak 2, nomor WhatsApp", def: "0896 0776 8300" },
      { key: "ig1", label: "Instagram yayasan", def: "yayasanabuahsan", hint: "Nama akun saja, tanpa @." },
      { key: "ig2", label: "Instagram pembinaan pemuda", def: "genmi.id" },
      { key: "ig3", label: "Instagram Abu Ahsan Group", def: "abuahsangroup" }
    ]
  }
];

// Daftar berbaris (tabel). Disimpan di dokumen pkbm/data dan pkbm/site.
export const LISTS = {
  pengurus: { cols: [["nama", "Nama"], ["jabatan", "Jabatan"]] },
  siswa: { cols: [["nama", "Nama"], ["paket", "Paket", ["", "Paket B", "Paket C"]], ["kelas", "Kelas"]] },
  jadwal: { cols: [["hari", "Hari"], ["jam", "Jam"], ["mapel", "Mata pelajaran"], ["paket", "Paket", ["", "Paket B", "Paket C"]], ["pengajar", "Pengajar"]] },
  majelis: { cols: [["hari", "Hari"], ["jam", "Jam"], ["tema", "Tema kajian"], ["pemateri", "Pemateri"], ["tempat", "Tempat"]] },
  pemuda: { cols: [["tanggal", "Tanggal"], ["kegiatan", "Kegiatan"], ["tempat", "Tempat"], ["ket", "Keterangan"]] },
  pengumuman: { cols: [["judul", "Judul"], ["tanggal", "Tanggal"], ["isi", "Isi pengumuman", "textarea"]] }
};
