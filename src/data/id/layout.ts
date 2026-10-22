export const layout = {
  skipLink: "Lompat ke konten utama",
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
    contact: "Ceritakan kebutuhan Anda",
    backToTop: "Kembali ke atas",
    learnMore: "Pelajari lebih lanjut",
    viewAll: "Lihat semua",
  },
  status: {
    loading: "Memuat",
    error: "Terjadi kesalahan",
    notFound: "Halaman tidak ditemukan",
  },
  footer: {
    navigationLabel: "Navigasi",
    contactLabel: "Kontak",
    rights: "Seluruh hak dilindungi.",
    statement: "Komunikasi yang jelas dan bisa dipertanggungjawabkan.",
    parentLabel: "Bagian dari Barito Bahalap Agency",
    groups: [
      {
        title: "Agensi",
        links: [
          { label: "Beranda", href: "/" },
          { label: "Wawasan", href: "/insight" },
        ],
      },
      {
        title: "Informasi",
        links: [
          { label: "Tentang", href: "/about" },
          { label: "Kontak", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privasi", href: "/privacy" },
          { label: "Ketentuan", href: "/terms" },
        ],
      },
    ],
  },
} as const;

export default layout;
