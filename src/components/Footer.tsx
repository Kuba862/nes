import Image from "next/image";
import { siteContent } from "@/content/site";
import styles from "./Footer.module.css";

type FooterProps = {
  currentPage?: "portfolio";
};

export function Footer({ currentPage }: FooterProps) {
  const { brand, footer, navigation } = siteContent;
  const isPortfolioPage = currentPage === "portfolio";
  const logoHref = isPortfolioPage ? "/" : "#";
  const logoLabel = isPortfolioPage ? brand.wordmark.homeLabel : brand.wordmark.backToTopLabel;

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <a href={logoHref} className={styles.footerLogo} aria-label={logoLabel}>
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width}
              height={brand.logo.height}
              priority={false}
            />
          </a>
          <ul className={styles.footerNav}>
            {navigation.links.map((link) => (
              <li key={link.label}>
                <a href={isPortfolioPage ? link.portfolioHref : link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerBase}>
          <span>{footer.copyright}</span>
          <em>{footer.tagline}</em>
        </div>
      </div>
    </footer>
  );
}
