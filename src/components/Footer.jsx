import ContactForm from './ContactForm.jsx'
import { PawPrint } from './PawMark.jsx'

// Clearly-placeholder contact details until real ones are provided.
const PLACEHOLDER_EMAIL = 'hello@furventures.example'
const PLACEHOLDER_PHONE = '+60 12-345 6789'

function Footer() {
  return (
    <footer id="contact" className="section footer">
      <div className="paw-trail paw-trail-footer" aria-hidden="true">
        <PawPrint size={16} />
        <PawPrint size={24} />
        <PawPrint size={34} />
        <PawPrint size={24} />
        <PawPrint size={16} />
      </div>
      <div className="footer-sparkles" aria-hidden="true">
        <span style={{ left: '6%', top: '14%' }}>✨</span>
        <span style={{ left: '22%', top: '3%', animationDelay: '-0.8s' }}>⭐</span>
        <span style={{ left: '78%', top: '8%', animationDelay: '-1.4s' }}>✨</span>
        <span style={{ left: '90%', top: '24%', animationDelay: '-0.4s' }}>🌟</span>
        <span style={{ left: '48%', top: '4%', animationDelay: '-2s' }}>✨</span>
      </div>
      <h2>Get in touch</h2>
      <div className="section-body">
        <p>Have a question or want us at your event? Use the form below.</p>
        <ContactForm />
        <address className="contact-meta">
          <span>
            Email:{' '}
            <a href={`mailto:${PLACEHOLDER_EMAIL}`}>{PLACEHOLDER_EMAIL}</a>
          </span>
          <span>
            Phone:{' '}
            <a href={`tel:${PLACEHOLDER_PHONE}`}>{PLACEHOLDER_PHONE}</a>
          </span>
          <span className="placeholder-note">[Placeholder contact details]</span>
        </address>
      </div>
      <p className="footer-note">© furventures · paw-printed with care</p>
    </footer>
  )
}

export default Footer