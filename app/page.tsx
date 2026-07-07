import business from '../data/business.json';

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const practiceAddress = '108 E 23rd St, New York, NY 10010';
const photos = business.photos ?? [];

const patientNotes = [
  {
    title: 'A calmer first step',
    copy: 'Call the office directly to ask about availability, new-patient details, and whether the practice is a fit for your dental goals.',
  },
  {
    title: 'Holistic questions welcome',
    copy: 'The name says holistic dental care. Use the first conversation to ask the team about materials, preferences, and treatment options.',
  },
  {
    title: 'Easy Gramercy access',
    copy: 'The practice is listed at East 23rd Street in Manhattan, convenient to Gramercy, Flatiron, and nearby Midtown South offices.',
  },
];

export default function Home() {
  const heroPhoto = business.heroImage?.url || photos[0]?.url;
  const galleryPhotos = photos.slice(1, 4);

  return (
    <main>
      <header className="site-header" aria-label="Site header">
        <a className="brand" href="#top" aria-label={`${business.name} home`}>
          <span className="brand-mark">GS</span>
          <span>
            <strong>{business.name}</strong>
            <small>Holistic dental care in Manhattan</small>
          </span>
        </a>
        <nav className="header-actions" aria-label="Contact links">
          <a href="#visit">Location</a>
          <a className="button button-small" href={phoneHref}>
            Call {business.phone}
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Dentist in Manhattan</p>
          <h1>Holistic dental care near Gramercy and East 23rd Street.</h1>
          <p className="lede">
            Gramercy Smiles Holistic Dental is a Manhattan dental practice for
            patients who want direct answers, a composed setting, and a clear
            next step before booking care.
          </p>
          <div className="cta-row">
            <a className="button" href={phoneHref}>
              Call {business.phone}
            </a>
            <a className="button button-secondary" href={business.website}>
              Visit practice website
            </a>
          </div>
          <dl className="hero-facts" aria-label="Practice facts">
            <div>
              <dt>Google rating</dt>
              <dd>4.9</dd>
            </div>
            <div>
              <dt>Google reviews</dt>
              <dd>587</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>Manhattan</dd>
            </div>
          </dl>
        </div>

        <div className="photo-panel" aria-label="Practice photos">
          {heroPhoto ? (
            <img
              className="hero-image"
              src={heroPhoto}
              alt={business.heroImage?.alt || `${business.name} practice photo`}
            />
          ) : null}
          <div className="photo-caption">
            <span>Practice photo</span>
            <strong>{practiceAddress}</strong>
          </div>
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">Before you book</p>
          <h2 id="intro-title">A concise page for making contact, not sorting through claims.</h2>
        </div>
        <p>
          The available public information is simple: dentist, Manhattan,
          holistic dental brand, strong Google rating, and an East 23rd Street
          location. This page keeps the same restraint and points you to the
          practice for current scheduling and care details.
        </p>
      </section>

      <section className="note-grid" aria-label="Patient planning notes">
        {patientNotes.map((note) => (
          <article className="note-card" key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.copy}</p>
          </article>
        ))}
      </section>

      {galleryPhotos.length > 0 ? (
        <section className="gallery-section" aria-labelledby="gallery-title">
          <div className="section-heading">
            <p className="eyebrow">Inside the practice</p>
            <h2 id="gallery-title">Real photos, kept close to the decision.</h2>
          </div>
          <div className="gallery">
            {galleryPhotos.map((photo, index) => (
              <img
                key={photo.url}
                src={photo.url}
                alt={`${business.name} practice photo ${index + 2}`}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="visit-section" id="visit" aria-labelledby="visit-title">
        <div className="visit-copy">
          <p className="eyebrow">Visit or call</p>
          <h2 id="visit-title">Contact the office on East 23rd Street.</h2>
          <p>
            For appointment availability, insurance questions, treatment
            details, or anything specific to holistic dentistry, contact the
            practice directly.
          </p>
        </div>
        <div className="contact-card">
          <div>
            <span>Phone</span>
            <a href={phoneHref}>{business.phone}</a>
          </div>
          <div>
            <span>Address</span>
            <p>{practiceAddress}</p>
          </div>
          <div>
            <span>Online</span>
            <a href={business.website}>Practice website</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>{business.name}</p>
        <a href={phoneHref}>{business.phone}</a>
      </footer>

      <div className="mobile-callbar" aria-label="Mobile contact bar">
        <a href={phoneHref}>Call {business.phone}</a>
      </div>
    </main>
  );
}
