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

	console.log(paymentInfo);

  const handleConfirm = async() => {
  const orderPayload = {
    customerName: shippingInfo.name,
    customerEmail: shippingInfo.email || null,

    shipping: {
      addressLine1: shippingInfo.addressLine1,
      addressLine2: shippingInfo.addressLine2,
      city: shippingInfo.city,
      state: shippingInfo.state,
      postalCode: shippingInfo.zip,
      country: "USA",
    },

    payment: {
      cardNumber: paymentInfo.cardNumber,
      expirationDate: paymentInfo.expirationDate,
      cvvCode: paymentInfo.cvvCode || null,
      cardHolderName: paymentInfo.cardHolderName,
    },

    items: cartItems.map(item => ({
      itemId: item.id,
      itemName: item.name,
      quantity: item.quantity,
    })),
  };

  try {
    const res = await fetch(
      "https://p7kdoe3seg.execute-api.us-east-1.amazonaws.com/dev/order-processing/order",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      }
    );

    if (!res.ok) {
      console.error("Order failed:", res.status);
      alert("Order failed. Please try again.");
      return;
    }

    const data = await res.json();
    console.log("Order created:", data);

    //Navigates to the Confirmation Page
    navigate("/purchase/viewConfirmation", {
      state: {
        cartItems,
        shippingInfo,
        paymentInfo,
        confirmationNumber: data.orderToken,  
        orderId: data.orderId,
      },
    });
  } catch (err) {
    console.error("Network error submitting order:", err);
    alert("Network error. Please try again.");
  }
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
              <p><strong>Cardholder Name:</strong> {paymentInfo.cardHolderName}</p>
              <p><strong>Card Number:</strong> **** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
              <p><strong>Expiry:</strong> {paymentInfo.expirationDate}</p>
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
          Edit Shipping
        </Button>
        <Button variant="success" size="lg" onClick={handleConfirm}>
          Confirm Order
        </Button>
      </div>
    </Container>
  );
}

export default ViewOrder;
