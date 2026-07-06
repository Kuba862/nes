import { siteContent, type Service } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Offer.module.css";

function RowArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M1 9h15M11 4l5 5-5 5" stroke="#0E0E14" strokeWidth="1.6" />
    </svg>
  );
}

function OfferRow({ service }: { service: Service }) {
  return (
    <Reveal as="a" className={styles.offerRow} href={service.href} aria-label={service.ariaLabel}>
      <span className={styles.offerName}>{service.title}</span>
      <span className={styles.offerDesc}>
        {service.description}
        <span className={styles.tags}>
          {service.tags.map((tag) => (
            <b key={tag}>{tag}</b>
          ))}
        </span>
      </span>
      <span className={styles.offerGo}>
        <RowArrow />
      </span>
    </Reveal>
  );
}

export function Offer() {
  const offer = siteContent.offer;

  return (
    <section className="sec" id={offer.id}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <p className="eyebrow">{offer.eyebrow}</p>
            <h2>
              {offer.headingLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p>{offer.intro}</p>
        </Reveal>

        <div className={styles.offerList}>
          {offer.services.map((service) => (
            <OfferRow key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
