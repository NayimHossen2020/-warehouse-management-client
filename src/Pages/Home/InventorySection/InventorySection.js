import React from 'react';
import './InventorySection.css';
import { Col, Container, Row } from 'react-bootstrap';

const InventorySection = () => {
    return (
        <Container>
            <p className='inventory-sm-title'>Our Services</p>
            <h1 className='inventory-title'>What we manage</h1>
            <Row className='py-5'>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
        </Container>
    );
};

export default InventorySection;