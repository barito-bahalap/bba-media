import "./Footer.css";
// Hooks
import { useLanguageSwitch, useSiteContent } from "@/hooks";
// Components
import { SmartLink, LanguageSwitcher } from "@/components";
import { Brand } from "./Brand";

export function Footer() {
  const { site, footerGroups, layout } = useSiteContent();
  const languageItems = useLanguageSwitch();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <Brand logo logoFull />

          <p className="site-footer__text">
            {site.tagline}. {site.location}.
          </p>

          <p className="site-footer__text">
            {site.name} |{" "}
            <a href={site.holdingUrl} rel="noopener noreferrer">
              {layout.footer.parentLabel}
            </a>
            .
          </p>

          <nav
            className="site-footer__contact"
            aria-label={layout.footer.contactLabel}
          >
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>

        {footerGroups.map((group) => (
          <nav
            key={group.title}
            className="site-footer__group"
            aria-label={group.title}
          >
            <h2 className="site-footer__heading">{group.title}</h2>

            <ul className="site-footer__list">
              {group.links.map((link) => (
                <li key={link.href}>
                  <SmartLink href={link.href}>{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container site-footer__legal">
        <LanguageSwitcher items={languageItems} label={layout.language.label} />

        <p>
          &copy; {new Date().getFullYear()} {site.holdingName}.{" "}
          {layout.footer.rights}
        </p>
      </div>
    </footer>
  );
}
