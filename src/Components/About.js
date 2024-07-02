import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container fluid className="p-5 bg-light">
            <Row className="align-items-center">
                <Col md={12} className="text-center mb-4">
                    <h1 className="display-4">About Me</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <p>
                        My name is Gaurav Gol, and I am from Uttarakhand. I completed my B.Tech from Dev Bhoomi Uttarakhand University.
                        I am a Software Developer with over 9 months of experience in the MERN stack.
                        I am dedicated to my work and passionate about building robust and scalable web applications.
                    </p>
                    <p>
                        My expertise lies in creating dynamic and interactive user interfaces using React, and developing server-side logic and databases using Node.js, Express, and MongoDB.
                        I have a strong understanding of front-end technologies such as HTML, CSS, and JavaScript, and I am proficient in using version control systems like Git and GitHub.
                    </p>
                    <p>
                        Throughout my career, I have worked on various projects, from small websites to large-scale applications, always striving to deliver high-quality code and excellent user experiences.
                        I am a quick learner and always eager to take on new challenges and improve my skills.
                    </p>
                    <p>
                        If you need help building your project, feel free to reach out to me. I am confident that my skills and dedication will make a valuable contribution to your team and projects.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
