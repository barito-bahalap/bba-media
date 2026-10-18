export const layout = {
  skipLink: "Lewati ke konten utama",
  menu: {
    open: "Menu",
    close: "Tutup menu",
    label: "Navigasi utama",
    primaryNav: "Navigasi utama",
    mobileNav: "Navigasi seluler",
  },
  language: {
    label: "Bahasa",
    en: "English",
    id: "Bahasa Indonesia",
  },
  actions: {
    contact: "Diskusikan kebutuhan",
    backToTop: "Kembali ke atas",
    learnMore: "Pelajari lebih lanjut",
    viewAll: "Lihat semua",
  },
  status: {
    loading: "Memuat konten",
    error: "Terjadi kesalahan",
    notFound: "Halaman tidak ditemukan",
  },
  footer: {
    navigationLabel: "Navigasi",
    contactLabel: "Kontak",
    rights: "Hak cipta dilindungi.",
    statement: "Pemikiran jernih. Komunikasi tepercaya. Eksekusi konsisten.",
    parentLabel: "Bagian dari Barito Bahalap Agency",
    groups: [
      {
        title: "Agensi",
        links: [
          { label: "Tentang", href: "/about" },
          { label: "Pendekatan", href: "/approach" },
          { label: "Standar", href: "/standards" },
        ],
      },
      {
        title: "Insight",
        links: [
          { label: "Artikel & Insight", href: "/insight" },
          { label: "Redaksi", href: "/redaksi" },
          { label: "Semua Layanan", href: "/services" },
        ],
      },
      {
        title: "Informasi",
        links: [
          { label: "Karier", href: "/careers" },
          { label: "Kontak", href: "/contact" },
          { label: "Privasi", href: "/privacy" },
          { label: "Ketentuan", href: "/terms" },
        ],
      },
    ],
    legal: [
      { label: "Privasi", href: "/privacy" },
      { label: "Ketentuan", href: "/terms" },
    ],
  },
} as const;

export default layout;
