// Layout
import { Outlet } from "react-router-dom";
import { RootLayout } from "@/components/layout";
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
import NotFoundPage from "@/pages/404/NotFoundPage";

export const appRoutes = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "approach", element: <ApproachPage /> },
      { path: "standards", element: <StandardsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
  {
    element: <Outlet />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
];
