import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>

                <Nav.Link onClick={() => navigate('/contactus')}>Contact</Nav.Link>
                <Nav.Link onClick={() => navigate('/projects')}>Projects</Nav.Link>
                <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>

            </Nav>
        </Navbar>
    )
}
