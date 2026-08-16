import ContactForm from './ContactForm.jsx'

// Clearly-placeholder contact details until real ones are provided.
const PLACEHOLDER_EMAIL = 'hello@furventures.example'
const PLACEHOLDER_PHONE = '+60 12-345 6789'

function Footer() {
  return (
    <footer id="contact" className="section footer">
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
      <p className="footer-note">© furventures</p>
    </footer>
  )
}

export default Footer