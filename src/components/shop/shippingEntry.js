import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

function ShippingEntry() {
    const location = useLocation();
    const navigate = useNavigate();

    // Get data passed from previous pages (cart, payment, and possibly existing shipping info)
    const { cartItems, paymentInfo, shippingInfo } = location.state || {
        cartItems: [],
        paymentInfo: {},
        shippingInfo: {},
    };

    // Initialize form fields with existing values (if any)
    const [name, setName] = useState(shippingInfo?.name || '');
    const [addressLine1, setAddressLine1] = useState(
        shippingInfo?.addressLine1 || ''
    );
    const [addressLine2, setAddressLine2] = useState(
        shippingInfo?.addressLine2 || ''
    );
    const [city, setCity] = useState(shippingInfo?.city || '');
    const [state, setState] = useState(shippingInfo?.state || '');
    const [zip, setZip] = useState(shippingInfo?.zip || '');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (!name || !addressLine1 || !city || !state || !zip) {
            alert('Please fill in all required shipping fields!');
            return;
        }

        // Create shipping info object
        const newShippingInfo = {
            name,
            addressLine1,
            addressLine2,
            city,
            state,
            zip,
        };

        // Navigate to view order page with all data
        navigate('/purchase/viewOrder', {
            state: { cartItems, paymentInfo, shippingInfo: newShippingInfo },
        });
    };

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Shipment Information</h1>

            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address Line 1 *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Street address"
                                value={addressLine1}
                                onChange={(e) =>
                                    setAddressLine1(e.target.value)
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apartment, suite, etc. (optional)"
                                value={addressLine2}
                                onChange={(e) =>
                                    setAddressLine2(e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>City *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>State *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Zip Code *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter zip code"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" size="lg" type="submit">
                                Review Order →
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ShippingEntry;
