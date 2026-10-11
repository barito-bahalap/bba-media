import { useState } from "react";
import { useLocation } from "react-router-dom";
// Hooks
import { useSiteContent } from "@/hooks";
// Components
import { Button, SmartLink } from "@/components";
import { Brand } from "./Brand";

export function Header() {
  const { site, mainNav, headerCta } = useSiteContent();
  const { pathname } = useLocation();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Brand name={site.name} shortName={site.shortName} />

        <nav className="site-header__nav" aria-label="Primary">
          {mainNav.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "site-header__link is-active"
                  : "site-header__link"
              }
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <Button href={headerCta.href} variant="primary" brand="media">
            {headerCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpenedAt(open ? null : pathname)}
        >
          <span className="site-header__toggle-label">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      <div id="mobile-drawer" className="site-header__drawer" hidden={!open}>
        <nav className="container site-header__drawer-nav" aria-label="Mobile">
          {mainNav.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="site-header__drawer-link"
            >
              {item.label}
            </SmartLink>
          ))}
          <Button href={headerCta.href} variant="primary" brand="media">
            {headerCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
