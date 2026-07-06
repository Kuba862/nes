"use client";

import {
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/class-names";
import styles from "./Reveal.module.css";

type RevealDelay = "none" | "dl1" | "dl2" | "dl3" | "dl4";

type RevealBaseProps = {
  children: ReactNode;
  className?: string;
  delay?: RevealDelay;
};

type RevealProps =
  | (RevealBaseProps &
      HTMLAttributes<HTMLDivElement> & {
        as?: "div";
      })
  | (RevealBaseProps &
      HTMLAttributes<HTMLElement> & {
        as: "section";
      })
  | (RevealBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
      });

function useRevealObserver() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      node.classList.add(styles.in);
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function Reveal(props: RevealProps) {
  const { as = "div", children, className, delay = "none", ...rest } = props;
  const ref = useRevealObserver();
  const revealClassName = cn(styles.reveal, delay !== "none" && styles[delay], className);
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a ref={setRef} className={revealClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  if (as === "section") {
    const sectionProps = rest as HTMLAttributes<HTMLElement>;

    return (
      <section ref={setRef} className={revealClassName} {...sectionProps}>
        {children}
      </section>
    );
  }

  const divProps = rest as HTMLAttributes<HTMLDivElement>;

  return (
    <div ref={setRef} className={revealClassName} {...divProps}>
      {children}
    </div>
  );
}
