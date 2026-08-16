import ContactForm from './ContactForm.jsx'

function Footer() {
  return (
    <footer id="contact" className="section footer">
      <h2>Get in touch</h2>
      <div className="section-body">
        <p>Have a question or want to work together? Use the form below.</p>
        <ContactForm />
      </div>
      <p className="footer-note">© furventures</p>
    </footer>
  )
}

export default Footer