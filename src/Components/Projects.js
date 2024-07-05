import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


function Projects() {
    return (
        <Container fluid>
            <h1 className="text-center custom-heading">Projects</h1>
            <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-4">
                    <h4 className="text-center">ADMIN PANEL | For a betting site</h4>
                    <img src="./adminpanel.png" className="img-fluid" alt="Admin Panel" />
                    <p>This production-level admin panel was built for my client and is a live project built on React. It provides comprehensive tools to manage a betting site. Key features include:</p>
                    <ul>
                        <li>Player Management: View player details and activity.</li>
                        <li>Transaction Approval: Approve and monitor withdrawal requests.</li>
                        <li>Dashboard Reporting: Real-time data visualization and reporting.</li>
                        <li><a href='https://cliq.zoho.com/company/654200107/chats/CT_2231796882690347967_654200107-B1/messages/1720154931280_131017031760'>Live Link</a></li>
                        <li><a href='https://github.com/Gauravgol/GroomAdminPanel'>Details || code</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} className="mb-4">
                    <h4 className="text-center">BACKEND FOR VIDEO STREAMING SITE</h4>
                    <img src="./adminpanel.png" className="img-fluid" alt="Backend for Video Streaming Site" />
                    <p>This is the backend for a video streaming site built using Node.js and MongoDB. It features production-level backend practices, JWT tokens for authentication, Cloudinary for video storage, and bcrypt for password encryption. Key features include:</p>
                    <ul>
                        <li>User registration: Approve and monitor user accounts.</li>
                        <li>Login, logout: Manage user sessions securely.</li>
                        <li>Image, video upload: Support for multimedia content uploads.</li>
                        <li>Subscribe, Like, Comment: perform all these events.</li>
                        <li><a href='https://github.com/Gauravgol/Backend-Project'>API Documentation</a></li>
                        <li><a href='https://github.com/Gauravgol/Backend-Project'>Details || code</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} className="mb-4">
                    <h4 className="text-center">SOCKET IO PROJECT</h4>
                    <img src="./socketTask.png" className="img-fluid" alt="Socket IO Project" />
                    <p>In this project, I have created a form to save data in MongoDB. Users can fetch their details and use Socket.IO to see all the live users.</p>
                    <ul>
                        <li>User registration: Approve and monitor user accounts.</li>
                        <li>Login, logout: Manage user sessions securely.</li>
                        <li>Image, video upload: Support for multimedia content uploads.</li>
                        <li>Subscribe, Like, Comment: perform all these events.</li>
                        <li><a href='https://task-1and-2.onrender.com'>Live Link</a></li>
                        <li><a href='https://github.com/Gauravgol/Task2'>Details || code</a></li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={12} className="mb-4">
                    <h4 className="text-center"> PortFoilio site</h4>

                    <p>
                        Welcome to my portfolio site! As you are now seeing my portfolio project. This platform is built using React and showcases my work and projects. I  continuously update the site to reflect my latest developments and achievements. I have used bootsrap and some npm packages and future i will integrated custom APIs and implement my learing here
                    </p>
                    <ul>


                        <li><a href='https://github.com/Gauravgol/PortfolioApp'>Details || code</a></li>
                    </ul>
                </Col>

            </Row>
        </Container>
    );
}

export default Projects;
