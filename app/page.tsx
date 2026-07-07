import business from '../data/business.json';

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const address = '108 E 23rd St, New York, NY 10010';
const photos = business.photos;

const visitNotes = [
  {
    title: 'Holistic dental care in Gramercy',
    text: 'A Manhattan dental office for people who want oral health care to feel thoughtful, calm, and connected to overall wellbeing.',
  },
  {
    title: 'Clear next steps',
    text: 'Call the office or visit the practice website to request an appointment, confirm availability, and ask about the care you need.',
  },
  {
    title: 'Easy to place',
    text: 'The office is listed at 108 E 23rd St, close to the center of Gramercy and convenient for patients around Manhattan.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Gramercy Smiles Holistic Dental home">
            <span>Gramercy Smiles</span>
            <small>Holistic Dental</small>
          </a>
          <div className="nav-actions">
            <a href="#location">Location</a>
            <a className="phone-link" href={phoneHref}>
              {business.phone}
            </a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Holistic dentist in Manhattan</p>
            <h1 id="hero-title">Dental care with a calmer Gramercy rhythm.</h1>
            <p className="hero-text">
              Gramercy Smiles Holistic Dental serves Manhattan patients from East 23rd Street with a grounded,
              patient-first approach to dental visits.
            </p>
            <div className="cta-row" aria-label="Contact options">
              <a className="button button-primary" href={phoneHref}>
                Call {business.phone}
              </a>
              <a className="button button-secondary" href={business.website}>
                Visit practice site
              </a>
            </div>
          </div>

          <div className="hero-media" aria-label="Office photo">
            <img src={business.heroImage.url} alt={business.heroImage.alt} />
            <div className="media-note">
              <strong>4.9 Google rating</strong>
              <span>587 reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Practice details">
        <div>
          <span>Practice type</span>
          <strong>{business.businessType}</strong>
        </div>
        <div>
          <span>Service area</span>
          <strong>Manhattan</strong>
        </div>
        <div>
          <span>Office listing</span>
          <strong>{address}</strong>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-heading">
          <p className="eyebrow">What to expect</p>
          <h2>A dental visit that feels considered, not rushed.</h2>
        </div>
        <div className="note-grid">
          {visitNotes.map((note) => (
            <article className="note-card" key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="photo-story" aria-label="Practice photos">
        <div className="photo-main">
          <img src={photos[1]?.url ?? business.heroImage.url} alt="Interior view at Gramercy Smiles Holistic Dental" />
        </div>
        <div className="photo-copy">
          <p className="eyebrow">The space</p>
          <h2>A Manhattan office with a quiet, polished feel.</h2>
          <p>
            The supplied practice photos show a clean clinical environment with warm materials and a composed
            waiting area. The site keeps those images central because they answer a real patient question:
            what will this visit feel like?
          </p>
        </div>
        <div className="photo-pair">
          <img src={photos[2]?.url ?? business.heroImage.url} alt="Treatment room at Gramercy Smiles Holistic Dental" />
          <img src={photos[3]?.url ?? business.heroImage.url} alt="Reception area at Gramercy Smiles Holistic Dental" />
        </div>
      </section>

      <section className="contact-section" id="location">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Ready to schedule or ask a question?</h2>
          <p>
            Use the phone number for the fastest direct contact, or open the practice website for appointment details.
          </p>
        </div>
        <div className="contact-card">
          <a className="contact-line" href={phoneHref}>
            <span>Phone</span>
            <strong>{business.phone}</strong>
          </a>
          <div className="contact-line">
            <span>Address</span>
            <strong>{address}</strong>
          </div>
          <a className="button button-primary full-width" href={business.website}>
            Open practice website
          </a>
        </div>
      </section>

      <footer>
        <span>{business.name}</span>
        <a href={phoneHref}>{business.phone}</a>
      </footer>

      <a className="mobile-call" href={phoneHref}>
        Call {business.phone}
      </a>
    </main>
  );
}
