import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      {/* Black brand block on top */}
      <div className="brand-bar">
        <Link to="/" className="brand-link" aria-label="Go to Home">
          THE SNACK SHOP
        </Link>
      </div>

      {/* White navigation bar below */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-right">
            <NavItem to="/purchase" text="Shop" />
            <NavItem to="/about" text="About Us" />
            <NavItem to="/contact" text="Contact Us" />
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ to, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {text}
    </NavLink>
  );
}
