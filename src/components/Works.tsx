import { siteContent, type Work } from "@/content/site";
import { cn } from "@/lib/class-names";
import { Reveal } from "./Reveal";
import styles from "./Works.module.css";

function ArrowIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M0 6h18M13 1l5 5-5 5" stroke="#fff" strokeWidth="1.8" />
    </svg>
  );
}

function CoverArt({ work }: { work: Work }) {
  if (work.coverVariant === "a1") {
    return (
      <span className={cn(styles.art, styles.a1)} aria-hidden="true">
        <span className={styles.el} />
        <span className={styles.ring} />
        <span className={styles.gl}>{work.coverGlyph}</span>
      </span>
    );
  }

  if (work.coverVariant === "a2") {
    return (
      <span className={cn(styles.art, styles.a2)} aria-hidden="true">
        <span className={cn(styles.r, styles.r1)} />
        <span className={cn(styles.r, styles.r2)} />
        <span className={cn(styles.r, styles.r3)} />
        <span className={styles.el} />
        <span className={styles.gl}>{work.coverGlyph}</span>
      </span>
    );
  }

  if (work.coverVariant === "a3") {
    return (
      <span className={cn(styles.art, styles.a3)} aria-hidden="true">
        <span className={styles.gl}>{work.coverGlyph}</span>
        <span className={styles.el}>
          <b />
        </span>
      </span>
    );
  }

  return (
    <span className={cn(styles.art, styles.a4)} aria-hidden="true">
      <span className={styles.el} />
      <span className={styles.ring} />
      <span className={styles.gl}>{work.coverGlyph}</span>
    </span>
  );
}

function WorkCard({ work, delay }: { work: Work; delay: "none" | "dl1" }) {
  const works = siteContent.works;

  return (
    <Reveal as="a" className={styles.card} href={work.href} delay={delay}>
      <span className={styles.cover}>
        <CoverArt work={work} />
        <span className={styles.chip}>{work.year}</span>
        <span className={styles.view}>
          {works.viewLabel}
          <ArrowIcon />
        </span>
      </span>
      <span className={styles.cardMeta}>
        <span className={styles.cat}>{work.category}</span>
        <h3>{work.title}</h3>
        <p>{work.result}</p>
      </span>
    </Reveal>
  );
}

export function Works() {
  const works = siteContent.works;

  return (
    <section className={cn("sec", styles.works)} id={works.id}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <p className="eyebrow">{works.eyebrow}</p>
            <h2>{works.heading}</h2>
          </div>
          <p>{works.intro}</p>
        </Reveal>

        <div className={styles.worksGrid}>
          {works.cases.map((work, index) => (
            <WorkCard key={work.title} work={work} delay={index % 2 === 1 ? "dl1" : "none"} />
          ))}
        </div>

        <Reveal className={styles.worksNote}>
          <a href={works.portfolioAction.href} className="btn btn-ghost">
            {works.portfolioAction.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
