"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/class-names";
import { Wordmark } from "./Wordmark";
import styles from "./Navigation.module.css";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = siteContent.navigation;

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={styles.nav}>
        <div className={styles.navIn}>
          <Wordmark ariaLabel={siteContent.brand.wordmark.homeLabel} />
          <nav aria-label={navigation.ariaLabel}>
            <ul className={styles.navLinks}>
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={navigation.cta.href} className={cn("btn btn-blue", styles.navCta)}>
            {navigation.cta.label}
          </a>
          <button
            className={cn(styles.burger, isOpen && styles.burgerOpen)}
            type="button"
            aria-label={isOpen ? navigation.closeMenuLabel : navigation.openMenuLabel}
            aria-expanded={isOpen}
            aria-controls={navigation.mobileMenuId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        className={cn(styles.mobileMenu, isOpen && styles.mobileMenuOpen)}
        id={navigation.mobileMenuId}
        aria-label={navigation.mobileAriaLabel}
      >
        {navigation.links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
            <span aria-hidden="true">→</span>
          </a>
        ))}
        <a
          href={navigation.cta.href}
          className={cn("btn btn-blue", styles.mmCta)}
          onClick={closeMenu}
        >
          {navigation.cta.label}
        </a>
      </nav>
    </>
  );
}
