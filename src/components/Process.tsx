import { siteContent } from "@/content/site";
import { cn } from "@/lib/class-names";
import { Reveal } from "./Reveal";
import styles from "./Process.module.css";

export function Process() {
  const process = siteContent.process;

  return (
    <section className="sec" id={process.id}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <p className="eyebrow">{process.eyebrow}</p>
            <h2>
              {process.headingLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p>{process.intro}</p>
        </Reveal>

        <div className={styles.steps}>
          {process.steps.map((step, index) => (
            <Reveal
              key={step.title}
              className={cn(styles.step, step.isLoop && styles.loop)}
              delay={index === 0 ? "none" : index === 1 ? "dl1" : index === 2 ? "dl2" : "dl3"}
            >
              <div className={styles.num} aria-hidden="true">
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
