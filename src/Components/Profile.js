import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


function Profile() {
    return (
        <Container fluid className="p-5 bg-light">
            <Row className="align-items-center">
                <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
                    <h1 className="display-4">I am Gaurav, Software Developer</h1>
                </Col>
                <Col md={6} className="text-center">
                    <img alt="Profile" className="img-fluid rounded-circle" style={{ maxWidth: '300px' }} />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    <h3>Tech Stack</h3>
                    <div className="d-flex justify-content-center mt-3">
                        <FontAwesomeIcon icon={faReact} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faNodeJs} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faDatabase} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faGit} size="3x" className="mx-3" />
                        <FontAwesomeIcon icon={faGithub} size="3x" className="mx-3" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
