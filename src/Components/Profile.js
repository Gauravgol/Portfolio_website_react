import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';


function Profile() {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setShowMessage(true);
    }, []);

    return (
        <Container fluid className="p-5 bg-light">
            <Row className="align-items-center">
                <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
                    <CSSTransition
                        in={showMessage}
                        timeout={5000}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div>
                            <h1 className="display-4">Welcome</h1>
                            <h1 className="display-4">I am Gaurav, Software Developer</h1>
                        </div>
                    </CSSTransition>
                </Col>
                <Col md={6} className="text-center">

                    <img src='./dev.webp' alt="Profile" className="img-fluid rounded" style={{ maxWidth: '50%', height: '20%' }} />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    <div className="d-flex justify-content-center flex-wrap mt-3">
                        <FontAwesomeIcon icon={faReact} size="3x" className="m-3" color="#61DBFB" />
                        <FontAwesomeIcon icon={faNodeJs} size="3x" className="m-3" color="#68A063" />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" className="m-3" color="#F7E018" />
                        <FontAwesomeIcon icon={faHtml5} size="3x" className="m-3" color="#E34F26" />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" className="m-3" color="#1572B6" />
                        <FontAwesomeIcon icon={faDatabase} size="3x" className="m-3" color="#4DB33D" />
                        <FontAwesomeIcon icon={faGit} size="3x" className="m-3" color="#F05032" />
                        <FontAwesomeIcon icon={faGithub} size="3x" className="m-3" color="#181717" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
