import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    Container,
    Card,
    Table,
    Button,
    Alert,
    Spinner,
} from 'react-bootstrap';

function ViewOrder() {
    const location = useLocation();
    const navigate = useNavigate();

    const { cartItems, paymentInfo, shippingInfo } = location.state || {
        cartItems: [],
        paymentInfo: {},
        shippingInfo: {},
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleConfirm = async () => {
        setLoading(true);
        setError(''); // you can still keep error state if you want to show inline feedback later

        try {
            const response = await fetch(
                'https://p7kdoe3seg.execute-api.us-east-1.amazonaws.com/dev/order-processing/order',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        items: cartItems,
                        payment: paymentInfo,
                        shipping: shippingInfo,
                    }),
                }
            );

            const result = await response.json();

            if (response.ok && result.confirmationNumber) {
                // ✅ Success: navigate to confirmation page
                navigate('/purchase/viewConfirmation', {
                    state: {
                        cartItems,
                        paymentInfo,
                        shippingInfo,
                        confirmationNumber: result.confirmationNumber,
                    },
                });
            } else {
                // ❌ Failure: show backend message or default one
                const message =
                    result.message ||
                    'Order could not be processed. Please try again.';
                window.alert(message); // show popup alert
                setError(message); // optional, keeps error state in case you still want inline display
            }
        } catch (err) {
            window.alert('Network error. Please try again later.');
            setError('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const total = cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Review Your Order</h1>

            {error && (
                <Alert variant="danger" className="text-center">
                    {error}
                </Alert>
            )}

            {/* --- Shipping Information --- */}
            <Card className="mb-4">
                <Card.Header as="h5">Shipping Information</Card.Header>
                <Card.Body>
                    {shippingInfo && (
                        <>
                            <p>
                                <strong>Name:</strong> {shippingInfo.name}
                            </p>
                            <p>
                                <strong>Address:</strong>{' '}
                                {shippingInfo.addressLine1}
                            </p>
                            {shippingInfo.addressLine2 && (
                                <p>
                                    <strong>Address Line 2:</strong>{' '}
                                    {shippingInfo.addressLine2}
                                </p>
                            )}
                            <p>
                                <strong>City/State/ZIP:</strong>{' '}
                                {shippingInfo.city}, {shippingInfo.state}{' '}
                                {shippingInfo.zip}
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
                            <p>
                                <strong>Cardholder Name:</strong>{' '}
                                {paymentInfo.cardHolderName}
                            </p>
                            <p>
                                <strong>Card Number:</strong> **** **** ****{' '}
                                {paymentInfo.cardNumber.slice(-4)}
                            </p>
                            <p>
                                <strong>Expiry:</strong>{' '}
                                {paymentInfo.expirationDate}
                            </p>
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
                                        <td>
                                            $
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </td>
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
                    <h4>Total: ${total}</h4>
                </Card.Body>
            </Card>

            {/* --- Buttons --- */}
            <div className="text-center">
                <Button
                    variant="secondary"
                    size="lg"
                    className="me-3"
                    onClick={() => navigate(-1)}
                    disabled={loading}
                >
                    Edit Shipping
                </Button>

                <Button
                    variant="success"
                    size="lg"
                    onClick={handleConfirm}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Spinner animation="border" size="sm" />{' '}
                            Processing...
                        </>
                    ) : (
                        'Confirm Order'
                    )}
                </Button>
            </div>
        </Container>
    );
}

export default ViewOrder;
