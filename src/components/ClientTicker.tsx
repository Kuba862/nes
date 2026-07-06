import { Fragment } from "react";
import { siteContent } from "@/content/site";
import styles from "./Portfolio.module.css";

export function ClientTicker() {
  const names = siteContent.portfolio.works.map((work) => work.name);
  const sets = [names, names];

  return (
    <div className={styles.names} aria-hidden="true">
      <div className={styles.ntrack}>
        {sets.map((items, setIndex) => (
          <div className={styles.nset} key={setIndex}>
            {items.map((name) => (
              <Fragment key={`${setIndex}-${name}`}>
                <span>{name}</span>
                <i />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
