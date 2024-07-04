import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark" expand="lg"  >
            <Navbar.Brand onClick={() => navigate('/')}> <img height="40px" src='./logo.png'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate('/contactus')}>Contact</Nav.Link>
                    <Nav.Link onClick={() => navigate('/projects')}>Projects</Nav.Link>
                    <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
