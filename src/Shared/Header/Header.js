import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="header-style">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="https://safestorage.in/assets/new_design_css/img/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='nav-link-Style' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='nav-link-Style' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='nav-link-Style' as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className='nav-link-Style' as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='main-button' as={Link} to="/SignIn">SIGN IN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;