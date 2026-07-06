"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { siteContent, type PortfolioWork } from "@/content/site";
import { cn } from "@/lib/class-names";
import styles from "./Portfolio.module.css";

type DelayStyle = CSSProperties & {
  "--d": string;
};

const portfolio = siteContent.portfolio;
const totalWorks = portfolio.works.length;
const weaveClasses = [styles.clsA, styles.clsB, styles.clsC, styles.clsD] as const;

function getRevealDelay(index: number) {
  if (index < portfolio.initialVisibleCount) {
    return index % 2 === 1 ? 120 : 0;
  }

  return (
    ((index - portfolio.initialVisibleCount) % portfolio.batchSize) * portfolio.revealStaggerMs
  );
}

function getStatus(visibleCount: number) {
  const suffix = visibleCount < totalWorks ? ` ${portfolio.statusSuffix}` : "";

  return `Wyświetlono ${visibleCount} z ${totalWorks} realizacji${suffix}`;
}

function PlaceholderCover({ work }: { work: PortfolioWork }) {
  if (work.coverVariant === "v1") {
    return (
      <span className={styles.part} aria-hidden="true">
        <span className={styles.el} />
        <span className={styles.ring} />
        <span className={styles.init}>{work.initials}</span>
      </span>
    );
  }

  if (work.coverVariant === "v2") {
    return (
      <span className={styles.part} aria-hidden="true">
        <span className={cn(styles.r, styles.r1)} />
        <span className={cn(styles.r, styles.r2)} />
        <span className={cn(styles.r, styles.r3)} />
        <span className={styles.el} />
        <span className={styles.init}>{work.initials}</span>
      </span>
    );
  }

  if (work.coverVariant === "v3") {
    return (
      <span className={styles.part} aria-hidden="true">
        <span className={styles.init}>{work.initials}</span>
        <span className={styles.disc}>
          <b />
        </span>
      </span>
    );
  }

  if (work.coverVariant === "v4") {
    return (
      <span className={styles.part} aria-hidden="true">
        <span className={styles.el} />
        <span className={styles.ring} />
        <span className={styles.init}>{work.initials}</span>
      </span>
    );
  }

  return (
    <span className={styles.part} aria-hidden="true">
      <span className={styles.init}>{work.initials}</span>
      <span className={styles.el} />
    </span>
  );
}

function WorkCard({
  index,
  isVisible,
  work,
}: {
  index: number;
  isVisible: boolean;
  work: PortfolioWork;
}) {
  const isDeferred = index >= portfolio.initialVisibleCount;
  const style = { "--d": `${getRevealDelay(index)}ms` } as DelayStyle;

  return (
    <a
      className={cn(
        styles.pcard,
        styles.portfolioReveal,
        weaveClasses[index % weaveClasses.length],
        styles[work.coverVariant],
        isDeferred && styles.deferred,
        isVisible && styles.cardVisible,
      )}
      href={work.href}
      id={`realizacja-${work.index}`}
      style={style}
    >
      <span className={styles.pcover}>
        {work.photo ? (
          <Image
            className={styles.photo}
            src={work.photo.src}
            alt={work.photo.alt}
            fill
            sizes={index < portfolio.initialVisibleCount ? "(max-width: 880px) 88vw, 58vw" : "88vw"}
            {...(index < portfolio.initialVisibleCount ? { priority: true } : { loading: "lazy" })}
          />
        ) : (
          <PlaceholderCover work={work} />
        )}
        <span className={styles.pnum}>{work.index}</span>
        <span className={styles.pview}>{portfolio.viewLabel}</span>
      </span>
      <span className={styles.pmeta}>
        <span className={styles.pcat}>{work.category}</span>
        <h3>{work.name}</h3>
        <p>{work.description}</p>
        <span className={styles.ptags}>
          {work.tags.map((tag) => (
            <b key={tag}>{tag}</b>
          ))}
        </span>
      </span>
    </a>
  );
}

export function PortfolioGrid() {
  const [visibleCount, setVisibleCount] = useState<number>(portfolio.initialVisibleCount);
  const [isLoading, setIsLoading] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const loadzoneRef = useRef<HTMLDivElement | null>(null);
  const revealObserverRef = useRef<IntersectionObserver | null>(null);
  const sentinelObserverRef = useRef<IntersectionObserver | null>(null);
  const visibleCountRef = useRef(visibleCount);
  const loadingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isComplete = visibleCount >= totalWorks;

  useEffect(() => {
    visibleCountRef.current = visibleCount;

    if (visibleCount >= totalWorks) {
      sentinelObserverRef.current?.disconnect();
    }
  }, [visibleCount]);

  useEffect(() => {
    loadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = root.querySelectorAll<HTMLElement>(`.${styles.portfolioReveal}`);

    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add(styles.in));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" },
    );

    revealObserverRef.current = observer;
    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      revealObserverRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const nodes = root.querySelectorAll<HTMLElement>(
      `.${styles.portfolioReveal}:not(.${styles.in})`,
    );

    if (!revealObserverRef.current) {
      nodes.forEach((node) => node.classList.add(styles.in));
      return;
    }

    nodes.forEach((node) => revealObserverRef.current?.observe(node));
  }, [visibleCount]);

  useEffect(() => {
    const loadzone = loadzoneRef.current;

    if (!loadzone) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisibleCount(totalWorks);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || loadingRef.current || visibleCountRef.current >= totalWorks) {
          return;
        }

        loadingRef.current = true;
        setIsLoading(true);
        timeoutRef.current = setTimeout(() => {
          setVisibleCount((current) => Math.min(current + portfolio.batchSize, totalWorks));
          setIsLoading(false);
          loadingRef.current = false;
        }, portfolio.loadingDelayMs);
      },
      { rootMargin: "420px 0px" },
    );

    sentinelObserverRef.current = observer;
    observer.observe(loadzone);

    return () => {
      observer.disconnect();
      sentinelObserverRef.current = null;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.pworks} aria-label={portfolio.gridAriaLabel}>
      <div className="wrap" ref={rootRef}>
        <div className={styles.pgrid}>
          {portfolio.works.map((work, index) => (
            <WorkCard key={work.index} index={index} isVisible={index < visibleCount} work={work} />
          ))}
        </div>

        <div className={cn(styles.loadzone, isComplete && styles.loadzoneHidden)} ref={loadzoneRef}>
          <div className={styles.loader} hidden={!isLoading} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <p className={styles.status} role="status" aria-live="polite">
            {isLoading ? portfolio.loadingStatus : getStatus(visibleCount)}
          </p>
        </div>

        <div
          className={cn(styles.endcap, styles.portfolioReveal, isComplete && styles.endcapVisible)}
        >
          <div className={styles.inf} aria-hidden="true">
            {portfolio.endcap.symbol}
          </div>
          <h2>{portfolio.endcap.heading}</h2>
          <p>{portfolio.endcap.text}</p>
          <a href={portfolio.endcap.action.href} className="btn btn-blue">
            {portfolio.endcap.action.label}
          </a>
        </div>
      </div>
    </section>
  );
}
