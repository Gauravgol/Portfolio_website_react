import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            We are a company dedicated to providing the best products and services.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light">Home</a></li>
                            <li><a href="#features" className="text-light">Features</a></li>
                            <li><a href="#pricing" className="text-light">Pricing</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            Email:  gauravgol34@gmail.com<br />
                            Phone: +917037237399
                        </p>
                        <div className="mt-3">
                            <a href="mailto:info@company.com" className="text-light mr-3">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mr-3">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}