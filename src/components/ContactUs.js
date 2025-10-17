import "./styling/contactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <section className="contact-intro">
        <h1>Contact Us</h1>
        <p>
          Questions about our products or your order? Get in touch with our
          team.
        </p>
      </section>

      <div className="contact-info-grid">
        <div className="info-card">
          <h3>Our Location</h3>
          <p>123 Snack Avenue</p>
          <p>Columbus, OH 43210</p>
        </div>

        <div className="info-card">
          <h3>Phone</h3>
          <p>(614) 555-SNACK</p>
          <p>1-800-SNACKS-4U</p>
        </div>

        <div className="info-card">
          <h3>Email</h3>
          <p>hello@snackshop.com</p>
          <p>support@snackshop.com</p>
        </div>

        <div className="info-card">
          <h3>Hours</h3>
          <p>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: 10AM - 4PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
