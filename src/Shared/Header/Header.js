import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../Hooks/CustomLink';

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
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/home">Home</CustomLink>
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/about">About</CustomLink>
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/services">Services</CustomLink>
                        <CustomLink className='nav-link-Style px-3 py-2 text-decoration-none rounded' as={Link} to="/blogs">Blogs</CustomLink>
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