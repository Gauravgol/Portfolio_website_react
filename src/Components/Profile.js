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
                            <h1 className='display-4'>Welcome!</h1>
                            <h1 className="font-black">I am Gaurav</h1>
                            <h1 className='display-4'></h1>
                            <h1 className=" font-black">Software Developer</h1>
                        </div>
                    </CSSTransition>
                </Col>
                <Col md={6} className="text-center">

                    <img src='./dev.webp' alt="Profile" className="img-fluid rounded" style={{ maxWidth: '50%', height: '20%' }} />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                <h1 class=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] marker">Skills</h1>
                <div className="d-flex justify-content-center flex-wrap align-items-center mt-3 gap-4">
                        {/* <FontAwesomeIcon icon={faReact} size="3x" className="m-3" color="#61DBFB" />
                        <FontAwesomeIcon icon={faNodeJs} size="3x" className="m-3" color="#68A063" />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" className="m-3" color="#F7E018" />
                        <FontAwesomeIcon icon={faHtml5} size="3x" className="m-3" color="#E34F26" />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" className="m-3" color="#1572B6" />
                        <FontAwesomeIcon icon={faDatabase} size="3x" className="m-3" color="#4DB33D" />
                        <FontAwesomeIcon icon={faGit} size="3x" className="m-3" color="#F05032" />
                    <FontAwesomeIcon icon={faGithub} size="3x" className="m-3" color="#181717" /> */}

                        
                            {/* <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./html.png" width="50%" alt="HTML 5" />
                                    <p className="text-center text-xs">HTML 5</p>
                                </div>
                            </div> */}


                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./reactjs.png" width="100%" alt="React JS" />
                                    <p className="text-center text-xs">React JS</p>
                                </div>
                            </div>
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./javascript.png" width="50%" alt="JavaScript" />
                                    <p className="text-center text-xs">JavaScript</p>
                                </div>
                            </div>
                           
                          
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./redux.png" width="50%" alt="Redux" />
                                    <p className="text-center text-xs">Redux</p>
                                </div>
                            </div>
                             
                            
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./nodejs.png" width="50%" alt="Node JS" />
                                    <p className="text-center text-xs">Node JS</p>
                                </div>
                            </div>
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./expressjs.png" width="50%" alt="Express JS" />
                                    <p className="text-center text-xs">Express JS</p>
                                </div>
                            </div>
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./mongodb.png" width="50%" alt="MongoDB" />
                                    <p className="text-center text-xs">MongoDB</p>
                                </div>
                            </div>
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./mongoose.png" width="50%" alt="Mongoose" />
                                    <p className="text-center text-xs">Mongoose</p>
                                </div>
                            </div>
                            
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./git.png" width="50%" alt="Git" />
                                    <p className="text-center text-xs">Git</p>
                                </div>
                            </div>
                            <div style={{ opacity: 1, transform: 'none' }}>
                                <div className="flex-around-center w-[60px] flex-col sm:w-[80px]">
                                    <img loading="lazy" src="./redis1.webp" width="50%" alt="Git" />
                                    <p className="text-center text-xs">Redis</p>
                                </div>
                            </div>
                           
                            
                           
                            
                       

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
