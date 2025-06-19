import AnimatedSection from "../components/AnimatedSection";
import "../LGM.css";

export default function MinistryTemplate({
  title,
  description,
  contactName,
  contactEmail,
  imageSrc,
  imageAlt = `${title} image`,
}) {
  return (
    <main className="our-story-page landing-page ministry-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>{title}</h3>
      </AnimatedSection>

      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>{description}</p>
            {contactName && <strong>Contact: {contactName}</strong>}
            {contactEmail && <p className="contact-email">{contactEmail}</p>}
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img src={imageSrc} alt={imageAlt} />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
