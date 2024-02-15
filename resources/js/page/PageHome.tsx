import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

const PageHome = () => {
    return (
        <Container>
        <Row className="justify-content-evenly gap-2">
          <Col xs={12} sm={6} md={3}>
            <Card >
              <Card.Body>
                <Card.Title className='text-center'>Marvel</Card.Title>
                <Card.Text>
                    Marvel, a cinematic universe of heroes and villains, captivates audiences with epic stories and breathtaking visuals, weaving a tapestry of iconic characters and thrilling adventures.
                </Card.Text>
                <NavLink to='/marvel'>
                    <Button variant="primary">Go to Marvel</Button>
                </NavLink>

              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card>
              <Card.Body>
                <Card.Title className='text-center'>Paypal</Card.Title>
                <Card.Text>
                    PayPal, a secure online payment solution, empowers users to seamlessly manage transactions, ensuring convenience and peace of mind in the digital realm of commerce.
                </Card.Text>
                <NavLink to='/paypal'>
                    <Button variant="primary">Go to Paypal</Button>
                </NavLink>

              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card>
              <Card.Body>
                <Card.Title className='text-center'>Weather</Card.Title>
                <Card.Text>
                    Weather, an ever-changing force of nature, dictates our daily rhythms. From the gentle touch of sunshine to the symphony of rain, it shapes our experiences, making each day unique.
                </Card.Text>
                <NavLink to='/weather'>
                    <Button variant="primary">Go to The Weather</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
    );
}

export default PageHome;
