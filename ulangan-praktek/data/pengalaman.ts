export type Pengalaman = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  label: string;
};

export const pengalaman: Pengalaman[] = [
  {
    id: "hari-pertama-di-tempat-baru",
    title: "Hari pertama di tempat baru",
    date: "12 Januari 2026",
    excerpt: "Belajar bahwa rasa asing tidak selalu berarti kita salah jalan.",
    content: "Hari pertama selalu terasa lebih panjang dari biasanya. Saya datang dengan banyak pertanyaan, lalu pulang membawa satu jawaban sederhana: keberanian tidak harus keras. Kadang keberanian hanya berarti hadir, menyapa lebih dulu, dan memberi kesempatan pada diri sendiri untuk beradaptasi.",
    label: "Memulai",
  },
  {
    id: "ketika-rencana-berubah",
    title: "Ketika rencana berubah",
    date: "28 Februari 2026",
    excerpt: "Rencana yang bergeser membuka jalan yang sebelumnya tidak terlihat.",
    content: "Saya pernah mengira satu rencana adalah satu-satunya jalan menuju tujuan. Ketika semuanya berubah, saya sempat berhenti terlalu lama. Ternyata perubahan itu mempertemukan saya dengan orang-orang dan pengalaman yang tidak pernah masuk daftar rencana.",
    label: "Bertumbuh",
  },
  {
    id: "belajar-dari-kesalahan",
    title: "Belajar dari kesalahan",
    date: "16 Maret 2026",
    excerpt: "Kesalahan kecil bisa menjadi guru yang paling jujur.",
    content: "Kesalahan membuat saya ingin mengulang hari dan menghapus bagian yang tidak menyenangkan. Namun setelah melihatnya kembali, saya menemukan petunjuk tentang hal yang perlu diperbaiki. Tidak semua kegagalan harus dirayakan, tetapi semuanya bisa dipelajari.",
    label: "Refleksi",
  },
  {
    id: "satu-langkah-kecil",
    title: "Satu langkah kecil",
    date: "4 April 2026",
    excerpt: "Kemajuan tidak selalu tampak besar dari dekat.",
    content: "Ada hari ketika hasil terasa tidak bergerak sama sekali. Saya mulai mencatat satu hal kecil yang selesai setiap hari. Perlahan, catatan itu menjadi bukti bahwa saya tetap berjalan, bahkan ketika langkahnya tidak terdengar.",
    label: "Melangkah",
  },
];