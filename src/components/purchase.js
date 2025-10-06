import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Purchase() {
  const navigate = useNavigate();

  // Hardcoded 5 snack items
  const [items] = useState([
    { id: 1, name: "Potato Chips", price: 3.99, image: "/images/chips.jpg" },
    {
      id: 2,
      name: "Chocolate Bar",
      price: 2.49,
      image: "/images/chocolate.jpg",
    },
    { id: 3, name: "Cookies", price: 4.99, image: "/images/cookie.jpg" },
    { id: 4, name: "Popcorn", price: 3.49, image: "/images/popcorn.jpg" },
    { id: 5, name: "Pretzels", price: 2.99, image: "/images/pretzel.jpg" },
  ]);

  // State for quantities
  const [item1Qty, setItem1Qty] = useState(0);
  const [item2Qty, setItem2Qty] = useState(0);
  const [item3Qty, setItem3Qty] = useState(0);
  const [item4Qty, setItem4Qty] = useState(0);
  const [item5Qty, setItem5Qty] = useState(0);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create cart items array
    const cartItems = [];
    if (item1Qty > 0)
      cartItems.push({ ...items[0], quantity: parseInt(item1Qty) });
    if (item2Qty > 0)
      cartItems.push({ ...items[1], quantity: parseInt(item2Qty) });
    if (item3Qty > 0)
      cartItems.push({ ...items[2], quantity: parseInt(item3Qty) });
    if (item4Qty > 0)
      cartItems.push({ ...items[3], quantity: parseInt(item4Qty) });
    if (item5Qty > 0)
      cartItems.push({ ...items[4], quantity: parseInt(item5Qty) });

    if (cartItems.length === 0) {
      alert("Please add at least one item to your cart!");
      return;
    }

    // Navigate to next page with data
    navigate("/purchase/paymentEntry", { state: { cartItems } });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-2">Snack Shop</h1>
      <h4 className="text-center text-muted mb-4">
        Select Your Favorite Snacks
      </h4>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={items[0].image}
                  alt={items[0].name}
                  style={{ height: "200px", objectFit: "cover" }}
                />{" "}
                <Card.Title className="mt-3">{items[0].name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-4">
                  ${items[0].price.toFixed(2)}
                </Card.Text>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={item1Qty}
                    onChange={(e) => setItem1Qty(e.target.value)}
                    className="text-center mx-auto"
                    style={{ width: "100px" }}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={items[1].image}
                  alt={items[1].name}
                  style={{ height: "200px", objectFit: "cover" }}
                />{" "}
                <Card.Title className="mt-3">{items[1].name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-4">
                  ${items[1].price.toFixed(2)}
                </Card.Text>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={item2Qty}
                    onChange={(e) => setItem2Qty(e.target.value)}
                    className="text-center mx-auto"
                    style={{ width: "100px" }}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={items[2].image}
                  alt={items[2].name}
                  style={{ height: "200px", objectFit: "cover" }}
                />{" "}
                <Card.Title className="mt-3">{items[2].name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-4">
                  ${items[2].price.toFixed(2)}
                </Card.Text>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={item3Qty}
                    onChange={(e) => setItem3Qty(e.target.value)}
                    className="text-center mx-auto"
                    style={{ width: "100px" }}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={items[3].image}
                  alt={items[3].name}
                  style={{ height: "200px", objectFit: "cover" }}
                />{" "}
                <Card.Title className="mt-3">{items[3].name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-4">
                  ${items[3].price.toFixed(2)}
                </Card.Text>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={item4Qty}
                    onChange={(e) => setItem4Qty(e.target.value)}
                    className="text-center mx-auto"
                    style={{ width: "100px" }}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={items[4].image}
                  alt={items[4].name}
                  style={{ height: "200px", objectFit: "cover" }}
                />{" "}
                <Card.Title className="mt-3">{items[4].name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-4">
                  ${items[4].price.toFixed(2)}
                </Card.Text>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={item5Qty}
                    onChange={(e) => setItem5Qty(e.target.value)}
                    className="text-center mx-auto"
                    style={{ width: "100px" }}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="primary" size="lg" type="submit">
            Proceed to Payment
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Purchase;
