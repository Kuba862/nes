import { siteContent } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Manifesto.module.css";

export function Manifesto() {
  const manifesto = siteContent.manifesto;

  return (
    <section className={styles.manifest}>
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{manifesto.eyebrow}</p>
          <blockquote>
            {manifesto.quoteStart} <span>{manifesto.quoteBlue}</span>
            {manifesto.quoteEnd}
          </blockquote>
          <p className={styles.sig}>{manifesto.signature}</p>
        </Reveal>
      </div>
    </section>
  );
}
