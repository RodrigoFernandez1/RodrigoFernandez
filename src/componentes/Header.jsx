// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../App.css"
import logo from "../assets/logo-rf.webp"

const Header = () => {
    return (
        <header id='aboutfoo'>
            <Navbar className="custom-navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt="Logo"
                            width="50"
                            height="auto"
                        />
                    </Navbar.Brand>

                    {/* Menú desplegable */}
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#experience" className="custom-nav-link">Experience</Nav.Link>
                            <Nav.Link href="#about" className="custom-nav-link">About</Nav.Link>
                            <Nav.Link href="#projects" className="custom-nav-link">Portfolio</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
