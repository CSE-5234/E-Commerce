import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

function PaymentEntry() {
  const location = useLocation();
  const navigate = useNavigate();

  // Margaret L: Followed Instruction to get cart data passed from Purchase page using location
  // If doesn't work I'll come back to fix it
  const { cartItems } = location.state || { cartItems: [] };

  // States for payment form inputs
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!cardNumber || !expirationDate || !cvvCode || !cardHolderName) {
      alert("Please fill in all payment fields!");
      return;
    }

    // Create payment info object
    const paymentInfo = {
      cardNumber,
      expirationDate,
      cvvCode,
      cardHolderName,
    };

    // Navigate to shipping page with both cart and payment data
    navigate("/purchase/shippingEntry", {
      state: { cartItems, paymentInfo },
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Payment Information</h1>

      {/* Display cart summary */}
      <Card className="mb-4">
        <Card.Body>
          <h5>Cart Summary:</h5>
          <p>You have {cartItems.length} item(s) in your cart</p>
        </Card.Body>
      </Card>

      {/* Payment form */}
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Card Holder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter cardholder name"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CVV Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="123"
                value={cvvCode}
                onChange={(e) => setCvvCode(e.target.value)}
                maxLength="4"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" size="lg" type="submit">
                Continue to Shipping →
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PaymentEntry;
