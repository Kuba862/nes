import { siteContent } from "@/content/site";
import { cn } from "@/lib/class-names";
import styles from "./Wordmark.module.css";

type WordmarkProps = {
  ariaLabel?: string;
  className?: string;
  href?: string;
};

export function Wordmark({ ariaLabel, className, href = "#" }: WordmarkProps) {
  const wordmark = siteContent.brand.wordmark;

  return (
    <a href={href} className={cn(styles.lockup, className)} aria-label={ariaLabel}>
      <span className={styles.top}>{wordmark.top}</span>
      <span className={styles.bottom}>
        {wordmark.beforeO}
        <span className={styles.logoO}>
          {wordmark.o}
          <i aria-hidden="true" />
        </span>
        {wordmark.afterO}
      </span>
    </a>
  );
}
