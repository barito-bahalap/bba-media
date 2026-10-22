export const contact = {
  seo: {
    title: "Kontak | Barito Bahalap Media",
    description:
      "Hubungi Barito Bahalap Media untuk mendiskusikan strategi komunikasi, hubungan masyarakat, atau operasi media.",
  },
  hero: {
    eyebrow: "Kontak",
    heading: ["Mulai dari kebutuhan Anda."],
    body: "Jelaskan perubahan yang ingin dicapai, pihak yang perlu dijangkau, dan batasan yang memengaruhi pekerjaan. Kami akan membantu merumuskan ruang lingkup yang realistis.",
  },
  details: {
    heading: "Percakapan awal yang bermanfaat",
    body: "Ringkasan singkat sudah cukup untuk memulai. Sertakan konteks, tujuan, audiens, tenggat waktu, serta ketentuan persetujuan atau kerahasiaan yang sudah diketahui.",
    emailLabel: "Email",
    email: "info@baritobahalap.com",
    parentLabel: "Agensi",
    parentName: "Barito Bahalap Agency",
  },
  form: {
    heading: "Ceritakan kebutuhan Anda",
    fields: {
      name: {
        label: "Nama",
        placeholder: "Nama Anda",
        required: "Silakan masukkan nama Anda.",
      },
      organization: {
        label: "Organisasi",
        placeholder: "Organisasi atau perusahaan",
      },
      email: {
        label: "Email kerja",
        placeholder: "anda@organisasi.com",
        required: "Silakan masukkan alamat email yang valid.",
      },
      service: {
        label: "Bidang dukungan",
        placeholder: "Pilih layanan",
        options: [
          "Komunikasi strategis",
          "Hubungan masyarakat",
          "Operasi media",
          "Produksi konten dan editorial",
          "Belum yakin",
        ],
      },
      message: {
        label: "Ringkasan kebutuhan",
        placeholder: "Konteks, tujuan, audiens, tenggat waktu, dan batasan",
        required: "Silakan tuliskan ringkasan kebutuhan.",
      },
    },
    consent: "Saya setuju untuk dihubungi terkait permintaan ini.",
    consentRequired: "Persetujuan diperlukan untuk mengirim pertanyaan ini.",
    submit: "Kirim permintaan",
    submitting: "Mengirim…",
    success: "Terima kasih. Permintaan Anda telah diterima.",
    error:
      "Permintaan Anda belum dapat dikirim. Silakan coba lagi atau hubungi kami melalui email.",
    privacyNote:
      "Informasi yang dikirim melalui formulir ini akan digunakan untuk menanggapi permintaan Anda.",
  },
} as const;

export default contact;
