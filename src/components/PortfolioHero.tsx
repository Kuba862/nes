import { siteContent } from "@/content/site";
import styles from "./Portfolio.module.css";

export function PortfolioHero() {
  const hero = siteContent.portfolio.hero;

  return (
    <section className={styles.phero}>
      <div className="wrap">
        <p className={`eyebrow rise d1`}>{hero.eyebrow}</p>
        <h1>
          <span className="rise d2">
            <span className={styles.oWrap}>
              {hero.title.firstLine.firstLetter}
              <i className={styles.oDot} aria-hidden="true" />
            </span>
            {hero.title.firstLine.rest}
          </span>
          <span className={`rise d3 ${styles.blue}`}>
            {hero.title.secondLine.start} <em>{hero.title.secondLine.emphasis}</em>
            {hero.title.secondLine.end}
          </span>
        </h1>
        <p className={`${styles.pheroLede} rise d4`}>{hero.lede}</p>
        <div className={`${styles.pheroMeta} rise d4`}>
          {hero.meta.map((item) => (
            <span key={item.label}>
              <b>{item.value}</b> {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
