import { useState } from "react";
import "./styling/contactUs.css";

function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we only ship within the United States, but we’re working on expanding to new regions soon!",
    },
    {
      question: "Can I return or exchange a snack?",
      answer:
        "Due to the nature of our products, we’re unable to accept returns. However, if your order arrived damaged or incorrect, contact us and we’ll make it right.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Orders are typically processed within 1–2 business days and arrive within 3–5 business days via standard shipping.",
    },
    {
      question: "Do you offer bulk or corporate orders?",
      answer:
        "Yes! For large orders or corporate gifting, email hello@snackshop.com for custom options and discounts.",
    },
  ];

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

      {/* Collapsible FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <h4>{faq.question}</h4>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}

export default ContactUs;
