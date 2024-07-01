import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Services</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
            </Nav>
        </Navbar>
    )
}
