# 💰 LoanHub - Inventory & Loan Management for Organizations

**LoanHub** awalnya dikonseptualisasikan sebagai platform SaaS (Software as a Service) skala mikro yang dirancang untuk membantu organisasi mahasiswa dalam mendigitalisasi pencatatan peminjaman barang dan inventaris. Proyek ini bertujuan menggantikan sistem pencatatan manual di lingkungan kampus dengan solusi berbasis cloud yang transparan dan terpusat.

---

## 🚀 The Vision
LoanHub lahir dari kebutuhan nyata di lingkungan organisasi kampus:
- **Centralized Tracking:** Mengelola siapa, apa, dan kapan barang dipinjam dalam satu dashboard.
- **SaaS Approach:** Dirancang untuk dapat menangani berbagai departemen/organisasi dengan sistem manajemen data yang terpisah melalui Firebase.
- **Efficiency:** Meminimalisir risiko kehilangan inventaris organisasi melalui pemantauan real-time.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Single Page Application)
- **Backend-as-a-Service:** [Firebase](https://firebase.google.com/)
- **Database:** Cloud Firestore (Real-time NoSQL)
- **Authentication:** Firebase Auth (Secure Login for Admins/Users)
- **Deployment Ready:** Arsitektur yang mendukung skalabilitas cepat.

---

## ✨ Fitur Utama (MVP Version)

- **Organization-Based Authentication:** Login khusus untuk pengurus organisasi/admin inventaris.
- **Inventory & Loan CRUD:** Manajemen penuh (Tambah, Baca, Edit, Hapus) data barang dan status peminjaman.
- **Real-time Synchronization:** Update data langsung tanpa perlu refresh, krusial untuk pengecekan inventaris di lapangan.
- **Financial & Item Summary:** Ringkasan statistik jumlah barang yang sedang keluar (loaned) di dashboard utama.

---

## 🔑 Security & Development Note
Project ini dikembangkan pada Semester 3 sebagai prototipe fungsional. Saat ini, sistem telah diperbarui menggunakan **Environment Variables** untuk melindungi Firebase API Keys, mencerminkan pemahaman pengembang terhadap standar keamanan aplikasi web modern dan perlindungan kredensial pihak ketiga.

---

## ⚙️ Cara Menjalankan di Lokal

1. **Clone & Install**
   ```bash
   git clone [https://github.com/Topaanbgs/LoanHub.git](https://github.com/Topaanbgs/LoanHub.git)
   cd LoanHub
   npm install
Konfigurasi Environment

Buat file .env di root folder.

Gunakan format dari .env.example dan masukkan Firebase Credentials Anda sendiri.

Run Project

Bash
npm start
Developed by Topaanbgs
