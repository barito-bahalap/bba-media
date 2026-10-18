export const services = {
  seo: {
    title: "Layanan | Barito Bahalap Media",
    description:
      "Komunikasi strategis, hubungan masyarakat, dan operasi media yang dirancang berdasarkan tujuan organisasi.",
  },
  hero: {
    eyebrow: "Layanan",
    heading: ["Pesan yang tepat.", "Operasi yang terarah."],
    body: "Rangkaian layanan komunikasi yang terkoordinasi untuk menerjemahkan prioritas organisasi menjadi komunikasi publik yang jelas dan konsisten.",
  },
  intro: {
    heading: "Ruang lingkup mengikuti tujuan.",
    body: "Kami tidak memulai dari kanal atau daftar keluaran. Kami memulai dari masalah yang harus diselesaikan, pihak yang perlu memahami pesan, dan hasil yang ingin dicapai.",
  },
  items: [
    {
      id: "strategic-communications",
      number: "01",
      title: "Komunikasi strategis",
      summary:
        "Menentukan posisi, membangun narasi, dan menyelaraskan komunikasi dengan prioritas organisasi.",
      deliverables: [
        "Strategi dan perencanaan komunikasi",
        "Pemosisian dan arsitektur pesan",
        "Pemetaan pemangku kepentingan dan audiens",
        "Konsep kampanye dan kerangka narasi",
        "Penilaian risiko komunikasi",
      ],
      outcome:
        "Arah komunikasi yang jelas dan dapat dijalankan secara konsisten oleh tim.",
    },
    {
      id: "public-relations",
      number: "02",
      title: "Hubungan masyarakat",
      summary:
        "Membangun hubungan media yang produktif dan berkomunikasi secara akurat, relevan, serta tepat waktu.",
      deliverables: [
        "Relasi dan pendekatan media",
        "Siaran pers dan pernyataan media",
        "Paket media dan materi pengarahan",
        "Persiapan juru bicara dan wawancara",
        "Dukungan reputasi dan respons isu",
      ],
      outcome:
        "Keterlibatan yang lebih terarah dengan media, pemangku kepentingan, dan publik.",
    },
    {
      id: "media-operations",
      number: "03",
      title: "Operasi media",
      summary:
        "Membangun alur kerja, disiplin editorial, dan pelaporan agar kanal komunikasi berjalan secara andal.",
      deliverables: [
        "Kalender editorial dan perencanaan konten",
        "Alur penerbitan dan persetujuan",
        "Koordinasi kanal dan operasi konten",
        "Pemantauan dan pelaporan kinerja",
        "Dokumentasi operasional dan serah terima",
      ],
      outcome:
        "Sistem kerja yang dapat diulang untuk operasional media sehari-hari.",
    },
    {
      id: "content-production",
      number: "04",
      title: "Produksi konten dan editorial",
      summary:
        "Menerjemahkan strategi menjadi konten yang koheren, relevan bagi audiens, dan sesuai dengan kanalnya.",
      deliverables: [
        "Arahan editorial dan penulisan naskah",
        "Narasi korporat dan kelembagaan",
        "Paket konten kampanye",
        "Adaptasi konten lintas kanal",
        "Peninjauan editorial dan kendali mutu",
      ],
      outcome:
        "Konten yang memiliki tujuan jelas, bukan sekadar memenuhi kalender publikasi.",
    },
  ],
  engagement: {
    heading: "Ruang lingkup ditetapkan sebelum produksi dimulai.",
    body: "Setiap kerja sama dimulai dengan tujuan, pemangku kepentingan, batasan, persetujuan, dan ukuran keberhasilan. Ruang lingkup serta keluaran dikonfirmasi sebelum eksekusi.",
    cta: { label: "Diskusikan kebutuhan Anda", href: "/contact" },
  },
} as const;

export default services;
