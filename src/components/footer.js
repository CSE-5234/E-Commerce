import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about" className="footer-link">About Us</Link>
        <span className="footer-sep">•</span>
        <Link to="/contact" className="footer-link">Contact Us</Link>
      </div>
      <div className="copyright">
        Copyright © 2025, THE SNACK SHOP. Powered by CSE 5234 Team 8
      </div>
    </footer>
  );
}
