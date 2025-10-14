import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Table, Button } from "react-bootstrap";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  // get data from previous page
  const { cartItems, shippingInfo } = location.state || {
    cartItems: [],
    shippingInfo: {},
  };

  const confirmationNumber = "1234567890";

  // sum order total
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <img
        src="/images/order_success.png"
        alt="Order Success"
        style={{ display: "block", margin: "0 auto 20px", width: "150px" }}
      />

      <h1 className="text-center mb-4 text-success">Order Succcessful!</h1>

      <Card className="mb-4 text-center">
        <Card.Body>
          <h3>Thank you for your purchase!</h3>
          <p>Your confirmation number is:</p>
          <h4 className="fw-bold">#{confirmationNumber}</h4>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h5">Order Summary</Card.Header>
        <Card.Body>
          {cartItems.length > 0 ? (
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No items found.</p>
          )}
          <h4 className="text-end mt-3">
            Order Total: ${totalCost.toFixed(2)}
          </h4>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h5">Ship To</Card.Header>
        <Card.Body>
          <p><strong>Name:</strong> {shippingInfo.name}</p>
          <p>
            <strong>Address:</strong>{" "}
            {shippingInfo.addressLine1}
            {shippingInfo.addressLine2 ? `, ${shippingInfo.addressLine2}` : ""}
            {`, ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zip}`}
          </p>

        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <Button
          variant="secondary"
          size="lg"
          className="me-3"
          onClick={() => window.print()}
        >
          Print Receipt
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/purchase")}
        >
          Back to Shop
        </Button>
      </div>
    </Container>
  );
}

export default Confirmation;
