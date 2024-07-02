import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
    return (
        <Container fluid className="p-5 bg-light">
            <Row className="align-items-center mb-4">
                <Col md={12} className="text-center">
                    <h1 className="display-4">Projects</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>ADMIN PANEL | For a betting site</Card.Title>
                            <Card.Text>
                                This production-level admin panel was built for my client and is a live project built on React. It provides comprehensive tools to manage a betting site. Key features include:
                            </Card.Text>
                            <ul>
                                <li>Player Management: View player details and activity.</li>
                                <li>Transaction Approval: Approve and monitor withdrawal requests.</li>
                                <li>Dashboard Reporting: Real-time data visualization and reporting.</li>
                            </ul>
                            <Card.Text>
                                The frontend utilizes React, HTML, CSS, and Bootstrap for responsive design. This admin panel ensures efficient management and secure operations for the betting platform.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/yourusername/project-repo" target="_blank">GitHub Source Code</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>BACKEND FOR VIDEO STREAMING SITE</Card.Title>
                            <Card.Text>
                                This is the backend for a video streaming site built using Node.js and MongoDB. It features production-level backend practices, JWT tokens for authentication, Cloudinary for video storage, and bcrypt for password encryption.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/yourusername/project-repo" target="_blank">GitHub Source Code</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
