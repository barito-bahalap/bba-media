export const contact = {
  seo: {
    title: "Kontak | Barito Bahalap Media",
    description:
      "Hubungi Barito Bahalap Media untuk membicarakan strategi komunikasi, hubungan masyarakat, atau operasi media.",
  },
  hero: {
    eyebrow: "Kontak",
    heading: ["Ceritakan kebutuhan Anda."],
    body: "Apa yang ingin dicapai, siapa yang perlu dijangkau, dan apa batasannya? Kami bantu merumuskan lingkup yang realistis.",
  },
  details: {
    heading: "Cukup ringkas",
    body: "Ringkasan singkat sudah cukup. Konteks, tujuan, dan tenggat waktu membantu kami membalas dengan tepat.",
    emailLabel: "Email",
    email: "info@baritobahalap.com",
    parentLabel: "Agensi",
    parentName: "Barito Bahalap Agency",
  },
  form: {
    heading: "Kirim pesan",
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
        label: "Bidang yang dibutuhkan",
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
        label: "Kebutuhan Anda",
        placeholder: "Tujuan, audiens, dan tenggat waktu",
        required: "Silakan tuliskan kebutuhan Anda.",
      },
    },
    consent: "Saya setuju dihubungi terkait permintaan ini.",
    consentRequired: "Centang persetujuan untuk melanjutkan.",
    submit: "Kirim permintaan",
    submitting: "Mengirim…",
    success: "Terima kasih. Permintaan Anda sudah kami terima.",
    error:
      "Permintaan belum terkirim. Coba lagi atau hubungi kami lewat email.",
    privacyNote:
      "Data dari formulir ini hanya dipakai untuk menanggapi permintaan Anda.",
  },
} as const;

export default contact;
