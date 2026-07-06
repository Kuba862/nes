import { siteContent } from "@/content/site";
import styles from "./Hero.module.css";

function ArrowIcon() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M0 6h18M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Hero() {
  const hero = siteContent.hero;

  return (
    <section className={styles.hero}>
      <div className="wrap">
        <p className={`eyebrow ${styles.heroEyebrow} rise d1`}>{hero.eyebrow}</p>
        <h1>
          <span className="rise d2">
            <span className={styles.oWrap}>
              {hero.title.firstLine.firstLetter}
              <i className={styles.oDot} aria-hidden="true" />
            </span>
            {hero.title.firstLine.rest}
          </span>
          <span className={`rise d3 ${styles.blue}`}>
            {hero.title.secondLine.start} <em>{hero.title.secondLine.emphasis}</em>{" "}
            {hero.title.secondLine.end}
          </span>
        </h1>
        <p className={`${styles.heroLede} rise d4`}>{hero.lede}</p>
        <div className={`${styles.heroActions} rise d5`}>
          <a href={hero.primaryAction.href} className="btn btn-blue">
            {hero.primaryAction.label}
          </a>
          <a href={hero.secondaryAction.href} className="arrow-link">
            {hero.secondaryAction.label}
            <ArrowIcon />
          </a>
        </div>
        <div className={`${styles.heroMeta} rise d5`}>
          {hero.meta.map((item, index) => (
            <span key={item}>
              {index > 0 ? <i aria-hidden="true" /> : null}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
