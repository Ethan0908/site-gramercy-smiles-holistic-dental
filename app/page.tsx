import business from '../data/business.json';

const address = '108 E 23rd St, New York, NY 10010';
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;

const careNotes = [
  'Dental visits in Gramercy with a quieter, whole-person tone.',
  'Clear next steps for new and returning patients.',
  'A Manhattan office location near 23rd Street.',
];

const visitDetails = [
  { label: 'Office', value: business.name },
  { label: 'Area', value: 'Gramercy and Manhattan' },
  { label: 'Address', value: address },
  { label: 'Google signal', value: '4.9 rating from 587 reviews' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Gramercy Smiles Holistic Dental home">
            <span className="brand__mark" aria-hidden="true">GS</span>
            <span>
              <strong>{business.name}</strong>
              <small>Holistic dental care in Manhattan</small>
            </span>
          </a>
          <a className="nav-call" href={phoneHref}>{business.phone}</a>
        </div>

        <div className="hero__grid" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Dentist in Gramercy</p>
            <h1 id="hero-title">A calmer dental visit near East 23rd Street.</h1>
            <p className="lede">
              Gramercy Smiles Holistic Dental serves Manhattan patients from a
              convenient Gramercy address, with scheduling handled directly by
              phone or through the practice website.
            </p>
            <div className="cta-row" aria-label="Contact options">
              <a className="button button--primary" href={phoneHref}>Call to schedule</a>
              <a className="button button--secondary" href={business.website}>Visit practice site</a>
            </div>
          </div>

          <aside className="appointment-panel" aria-label="Practice snapshot">
            <div className="panel-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="panel-kicker">Practice snapshot</p>
            <dl>
              <div>
                <dt>Phone</dt>
                <dd><a href={phoneHref}>{business.phone}</a></dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt>Reviews</dt>
                <dd>4.9 Google rating, 587 reviews</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="intro-section" aria-label="Care approach">
        <div className="section-label">What to expect</div>
        <div className="intro-copy">
          <h2>Direct information, simple next steps, and a setting that does not feel rushed.</h2>
          <p>
            The public listing identifies the practice as a holistic dental
            office in Manhattan. This page keeps the path practical: confirm
            fit, call the office, or continue to the practice website for the
            full patient experience.
          </p>
        </div>
      </section>

      <section className="care-strip" aria-label="Patient priorities">
        {careNotes.map((note, index) => (
          <article className="care-note" key={note}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{note}</p>
          </article>
        ))}
      </section>

      <section className="details-section" aria-labelledby="details-title">
        <div>
          <p className="eyebrow">Before you call</p>
          <h2 id="details-title">The essential details are easy to scan.</h2>
        </div>
        <div className="detail-list">
          {visitDetails.map((item) => (
            <div className="detail-row" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="contact-card">
          <p className="eyebrow">Ready to continue?</p>
          <h2 id="contact-title">Call Gramercy Smiles Holistic Dental.</h2>
          <p>
            For appointment availability, patient questions, or directions to
            the East 23rd Street office, contact the practice directly.
          </p>
          <div className="cta-row">
            <a className="button button--primary" href={phoneHref}>Call {business.phone}</a>
            <a className="button button--secondary" href={business.website}>Open website</a>
          </div>
        </div>
      </section>
    </main>
  );
}
