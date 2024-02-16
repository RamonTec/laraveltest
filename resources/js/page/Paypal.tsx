import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const PaypalView = () => {
    const [payPalLink, setPayPalLink] = useState('');

    const handlePayment = async (amount: number) => {
        try {
            const response = await axios.post('/create-payment', {
                price: amount,
            });
            setPayPalLink(response.data.return_url);
            // Redirige al usuario a la URL de PayPal
            console.log(response.data);
            window.location.href = response.data.return_url;
        } catch (error) {
            console.error('Error al crear el pago:', error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-evenly gap-2">

            <Col xs={12} sm={6} md={3}>
                <Card>
                <Card.Body>
                    <Card.Title>Zapatillas de futbol</Card.Title>
                    <Card.Text>
                        Talla 42 - color negro
                    </Card.Text>
                    <Card.Text>
                        Price: 50$
                    </Card.Text>
                    <button onClick={() => {
                        handlePayment(50);
                    }}>Realizar Pago</button>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
                <Card>
                <Card.Body>
                    <Card.Title>Zapatillas de baile</Card.Title>
                    <Card.Text>
                        Talla 40 - color rosado
                    </Card.Text>
                    <Card.Text>
                        Price: 530$
                    </Card.Text>
                    <button onClick={() => {
                        handlePayment(530);
                    }}>Realizar Pago</button>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
                <Card>
                <Card.Body>
                    <Card.Title>Zapatillas de futbol</Card.Title>
                    <Card.Text>
                        Talla 42 - color negro
                    </Card.Text>
                    <Card.Text>
                        Price: 50$
                    </Card.Text>
                    <button onClick={() => {
                        handlePayment(50);
                    }}>Realizar Pago</button>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
                <Card>
                <Card.Body>
                    <Card.Title>Zapatillas de futbol</Card.Title>
                    <Card.Text>
                        Talla 42 - color negro
                    </Card.Text>
                    <Card.Text>
                        Price: 50$
                    </Card.Text>
                    <button onClick={() => {
                        handlePayment(50);
                    }}>Realizar Pago</button>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
                <Card>
                <Card.Body>
                    <Card.Title>Zapatillas de futbol: air yordan</Card.Title>
                    <Card.Text>
                        Talla 22 - color rojo
                    </Card.Text>
                    <Card.Text>
                        Price: 500$
                    </Card.Text>
                    <button onClick={() => {
                        handlePayment(500);
                    }}>Realizar Pago</button>
                </Card.Body>
                </Card>
            </Col>

            <Col xs={12} sm={6} md={3}>
                <Card>
                <Card.Body>
                    <Card.Title>Zapatillas de futbol</Card.Title>
                    <Card.Text>
                        Talla 42 - color blanco
                    </Card.Text>
                    <Card.Text>
                        Price: 50$
                    </Card.Text>
                    <button onClick={() => {
                        handlePayment(10);
                    }}>Realizar Pago</button>
                </Card.Body>
                </Card>
            </Col>

            </Row>
        </Container>
    );
}

export default PaypalView;
