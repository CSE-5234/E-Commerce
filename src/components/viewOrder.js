import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Table, Button } from "react-bootstrap";

function ViewOrder() {
	const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, paymentInfo, shippingInfo } = location.state || {
    cartItems: [],
    paymentInfo: {},
    shippingInfo: {},
  };

  const handleConfirm = () => {
    navigate("/purchase/viewConfirmation", {
      state: { cartItems, paymentInfo, shippingInfo },
    });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Review Your Order</h1>

      {/* --- Shipping Information --- */}
      <Card className="mb-4">
        <Card.Header as="h5">Shipping Information</Card.Header>
        <Card.Body>
          {shippingInfo && (
            <>
              <p><strong>Name:</strong> {shippingInfo.name}</p>
              <p><strong>Address:</strong> {shippingInfo.addressLine1}</p>
              {shippingInfo.addressLine2 && (
                <p><strong>Address Line 2:</strong> {shippingInfo.addressLine2}</p>
              )}
              <p>
                <strong>City/State/ZIP:</strong>{" "}
                {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}
              </p>
            </>
          )}
        </Card.Body>
      </Card>

      {/* --- Payment Information --- */}
      <Card className="mb-4">
        <Card.Header as="h5">Payment Information</Card.Header>
        <Card.Body>
          {paymentInfo && (
            <>
              <p><strong>Cardholder Name:</strong> {paymentInfo.cardName}</p>
              <p><strong>Card Number:</strong> **** **** **** {paymentInfo.last4}</p>
              <p><strong>Expiry:</strong> {paymentInfo.expiry}</p>
            </>
          )}
        </Card.Body>
      </Card>

      {/* --- Cart Items --- */}
      <Card className="mb-4">
        <Card.Header as="h5">Items in Your Cart</Card.Header>
        <Card.Body>
          {cartItems.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No items in cart.</p>
          )}
        </Card.Body>
      </Card>

      {/* --- Order Summary --- */}
      <Card className="mb-4">
        <Card.Header as="h5">Order Summary</Card.Header>
        <Card.Body>
          <h4>
            Total: $
            {cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </h4>
        </Card.Body>
      </Card>

      {/* --- Buttons --- */}
      <div className="text-center">
        <Button
          variant="secondary"
          size="lg"
          className="me-3"
          onClick={() => navigate(-1)}
        >
          ← Edit Shipping
        </Button>
        <Button variant="success" size="lg" onClick={handleConfirm}>
          Confirm Order ✓
        </Button>
      </div>
    </Container>
  );
}

export default ViewOrder;
