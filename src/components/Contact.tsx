import { siteContent } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

export function Contact() {
  const contact = siteContent.contact;

  return (
    <section className={styles.contact} id={contact.id}>
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>
            {contact.heading}
            <span className={styles.period} aria-hidden="true" />
          </h2>
        </Reveal>
        <div className={styles.contactGrid}>
          <Reveal delay="dl1">
            <p className={styles.contactLede}>{contact.lede}</p>
            <div className={styles.contactActions}>
              <a href={contact.email.href} className="btn btn-white">
                {contact.email.label}
              </a>
              <a href={contact.phone.href} className="btn btn-outline-light">
                {contact.phone.label}
              </a>
            </div>
          </Reveal>
          <Reveal className={styles.contactList} delay="dl2">
            {contact.socials.map((social) => (
              <a href={social.href} key={social.label} rel="noopener">
                {social.label}
                <small>{social.detail}</small>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
