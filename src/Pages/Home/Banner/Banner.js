import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Row className='pt-5'>
                <Col sm={12} md={6} className="mb-3 d-flex justify-content-center align-items-center">
                    <div>
                        <h1>We Store Anything You Care...Best Storage Services</h1>
                        <p>10% and 20% discounts on storage*</p>
                        <h2>+91 8088848484</h2>
                        <Button>GET A FREE QUOTE</Button>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://safestorage.in/assets/new_design_css/img/main-hero-img.png" className="img-fluid hero-img mt-5 wow pulse" data-wow-iteration="infinite" data-wow-duration="5s" alt="Storage services in India" title="Best Self Storage Services" id='main-banner-img' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;