import { useState } from "react";
import { useLocation } from "react-router-dom";
// Style
import "./Header.css";
// Hooks
import { useLanguageSwitch, useSiteContent } from "@/hooks";
// Components
import { Button, SmartLink, LanguageSwitcher } from "@/components";
import { Brand } from "./Brand";

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function Header() {
  const { mainNav, headerCta, footerGroups, layout } = useSiteContent();
  const languageItems = useLanguageSwitch();

  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (target: string) => {
    const current = normalize(pathname);
    const destination = normalize(target);

    return (
      current === destination ||
      (destination !== "/" && current.startsWith(`${destination}/`))
    );
  };

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Brand logo />

        <nav className="site-header__nav" aria-label={layout.menu.primaryNav}>
          {mainNav.map((item) => {
            const active = isActive(item.href);

            return (
              <SmartLink
                key={item.href}
                href={item.href}
                className={
                  active ? "site-header__link is-active" : "site-header__link"
                }
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </SmartLink>
            );
          })}
        </nav>

        <div className="site-header__end">
          <LanguageSwitcher
            items={languageItems}
            label={layout.language.label}
          />
          <div className="site-header__cta">
            <Button
              label={headerCta.label}
              href={headerCta.href}
              variant="primary"
              brand="media"
              size="sm"
            />
          </div>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? layout.menu.close : layout.menu.open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="site-header__toggle-label">
              {open ? layout.menu.close : layout.menu.open}
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-drawer" className="site-header__drawer" hidden={!open}>
        <div className="container site-header__drawer-inner">
          <nav
            className="site-header__drawer-nav"
            aria-label={layout.menu.mobileNav}
          >
            {footerGroups.map((group) => (
              <section key={group.title} className="site-header__drawer-group">
                <h2 className="site-header__drawer-heading">{group.title}</h2>

                <ul className="site-header__drawer-list">
                  {group.links.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <li key={item.href}>
                        <SmartLink
                          href={item.href}
                          className={
                            active
                              ? "site-header__drawer-link is-active"
                              : "site-header__drawer-link"
                          }
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </SmartLink>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}

            <Button
              label={headerCta.label}
              href={headerCta.href}
              variant="primary"
              brand="media"
              onClick={() => setOpen(false)}
              fullWidth
            />

            <LanguageSwitcher
              items={languageItems}
              label={layout.language.label}
              className="site-header__drawer-language"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
