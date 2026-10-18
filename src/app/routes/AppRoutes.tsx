// Layout
import { Outlet } from "react-router-dom";
import { RootLayout } from "@/components/layout";
// i18n
import { DEFAULT_LOCALE, ENABLED_LOCALES } from "@/i18n/locales";
// Pages
import HomePage from "@/pages/home/HomePage";
import ServicesPage from "@/pages/services/ServicesPage";
import ApproachPage from "@/pages/approach/ApproachPage";
import StandardsPage from "@/pages/standards/StandardsPage";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import CareersPage from "@/pages/careers/CareersPage";
import PrivacyPage from "@/pages/privacy/PrivacyPage";
import TermsPage from "@/pages/terms/TermsPage";
import ArticlesPage from "@/pages/articles/ArticlesPage";
import ArticlePage from "@/pages/articles/ArticlePage";
import RedaksiPage from "@/pages/redaksi/RedaksiPage";
import NotFoundPage from "@/pages/404/NotFoundPage";

// Fresh route objects per locale so each prefix gets its own tree.
const pageRoutes = () => [
  { index: true, element: <HomePage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "approach", element: <ApproachPage /> },
  { path: "standards", element: <StandardsPage /> },
  { path: "about", element: <AboutPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "insight", element: <ArticlesPage /> },
  { path: "insight/:slug", element: <ArticlePage /> },
  { path: "redaksi", element: <RedaksiPage /> },
  { path: "careers", element: <CareersPage /> },
  { path: "privacy", element: <PrivacyPage /> },
  { path: "terms", element: <TermsPage /> },
];

export const appRoutes = [
  // Default locale lives at "/", every other enabled locale under "/<code>"
  { element: <RootLayout />, children: pageRoutes() },
  ...ENABLED_LOCALES.filter((code) => code !== DEFAULT_LOCALE).map((code) => ({
    path: code,
    element: <RootLayout />,
    children: pageRoutes(),
  })),
  {
    element: <Outlet />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
];
