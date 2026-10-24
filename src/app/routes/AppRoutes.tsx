// Layout
import { Outlet } from "react-router-dom";
import { RootLayout } from "@/components/layout";
// i18n
import { DEFAULT_LOCALE, ENABLED_LOCALES } from "@/i18n/locales";
// Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import ArticlesPage from "@/pages/articles/ArticlesPage";
import ArticlePage from "@/pages/articles/ArticlePage";
import NotFoundPage from "@/pages/404/NotFoundPage";

// Fresh route objects per locale so each prefix gets its own tree.
const pageRoutes = () => [
  { index: true, element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "insight", element: <ArticlesPage /> },
  { path: "insight/:slug", element: <ArticlePage /> },
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
