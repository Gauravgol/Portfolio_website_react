import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5>About Me</h5>
                        <p>
                            A Developer dedicated to providing the best products and services.
                        </p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="text-light" onClick={() => navigate('/')}> Home</li>
                            <li className="text-light" onClick={() => navigate('/projects')}> Projects</li>
                            <li className="text-light" onClick={() => navigate('/about')}> About</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            Email: gauravgol34@gmail.com<br />
                            Phone: +917037237399
                        </p>
                        <div className="mt-3">
                            <a href="mailto:gauravgol34@gmail.com" className="text-light mr-3">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mr-3">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://wa.me/7037237399" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}