import Image from "next/image";
import { siteContent } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const { brand, footer, navigation } = siteContent;

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <a href="#" className={styles.footerLogo} aria-label={brand.wordmark.backToTopLabel}>
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
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
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
