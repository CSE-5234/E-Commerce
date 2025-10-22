import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// --- existing Lab 5 pages ---
import Purchase from "./components/shop/purchase";
import PaymentEntry from "./components/shop/paymentEntry";
import ShippingEntry from "./components/shop/shippingEntry";
import ViewOrder from "./components/shop/viewOrder";
import Confirmation from "./components/shop/confirmation";

// --- new Lab 6 UI components ---
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home";
import AboutUs from "./components/AboutUs"; // ← added
import "./styles.css";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="app-root">
        {/* consistent navigation bar at top */}
        <Navbar />

        <main className="page-content">
          <Routes>
            {/* Home page with carousel */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} /> {/* ← added */}
            <Route path="/contact" element={<ContactUs/>} />

            {/* Existing Lab 5 purchase flow */}
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder />} />
            <Route path="/purchase/viewConfirmation" element={<Confirmation />} />

            {/* Optional redirect for unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {/* consistent footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
