import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Spinner,
} from 'react-bootstrap';

function Purchase() {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch inventory from microservice
    useEffect(() => {
        const fetchInventory = async () => {
            try {
                // const response = await fetch(
                //     'http://localhost:5000/inventory-management/inventory'
                // );
                const response = await fetch(
                    'https://mocki.io/v1/7d628f1a-85e3-4f57-b174-86d2f7616939'
                );
                if (!response.ok) throw new Error('Failed to load inventory');
                const data = await response.json();
                console.log(data);
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchInventory();
    }, []);

    // Handle quantity change
    const handleQtyChange = (id, value) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(0, parseInt(value) || 0),
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const cartItems = items
            .filter((item) => quantities[item.id] > 0)
            .map((item) => ({ ...item, quantity: quantities[item.id] }));

        if (cartItems.length === 0) {
            alert('Please add at least one item to your cart!');
            return;
        }

        // Navigate to payment page
        navigate('/purchase/paymentEntry', { state: { cartItems } });
    };

    // Display loading or error
    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" /> <p>Loading inventory...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-danger my-5">Error: {error}</div>
        );
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-2">Snack Shop</h1>
            <h4 className="text-center text-muted mb-4">
                Select Your Favorite Snacks
            </h4>

            <Form onSubmit={handleSubmit}>
                <Row>
                    {items.map((item) => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Body className="text-center">
                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            height: '200px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <Card.Title className="mt-3">
                                        {item.name}
                                    </Card.Title>
                                    <Card.Text className="text-success fw-bold fs-4">
                                        ${item.price.toFixed(2)}
                                    </Card.Text>
                                    <Form.Group>
                                        <Form.Label>Quantity:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min="0"
                                            value={quantities[item.id] || 0}
                                            onChange={(e) =>
                                                handleQtyChange(
                                                    item.id,
                                                    e.target.value
                                                )
                                            }
                                            className="text-center mx-auto"
                                            style={{ width: '100px' }}
                                        />
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
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
