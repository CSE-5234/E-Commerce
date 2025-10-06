import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Purchase from "./components/purchase";
import PaymentEntry from "./components/paymentEntry";
import ShippingEntry from "./components/shippingEntry";
import ViewOrder from "./components/viewOrder";
import Confirmation from "./components/confirmation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/" element={<Navigate to="/purchase" />} />
          <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
          <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
          <Route path="/purchase/viewOrder" element={<ViewOrder />} />
          <Route path="/purchase/viewConfirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
