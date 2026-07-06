import { siteContent } from "@/content/site";
import styles from "./Marquee.module.css";

export function Marquee() {
  const sets = [siteContent.marquee.items, siteContent.marquee.items];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {sets.map((items, setIndex) => (
          <div className={styles.set} key={setIndex}>
            {items.map((item) => (
              <span key={`${setIndex}-${item}`}>
                <span>{item}</span>
                <i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
