import React from 'react';
import './InventorySection.css';
import { Col, Container, Row } from 'react-bootstrap';
import InventoryCart from '../InventoryCart/InventoryCart';
import useServices from '../../../Hooks/useServices';

const InventorySection = () => {
    const [services, setServices] = useServices();

    return (
        <Container>
            <div className='inventory-title'>
                <p>Our Services</p>
                <h1>What we manage</h1>
            </div>
            <Row className='py-3'>
                {
                    services?.map(service => <InventoryCart key={service.id} service={service} />)
                }
            </Row>

            <div >
                <Row className='d-flex align-items-center justify-content-center my-3'>
                    <Col sm={12} md={7} className="d-flex justify-content-end">
                        <p className='fw-bold mt-2'>See what we can offer just for your needs</p>
                    </Col>

                    <Col sm={12} md={5} className="d-flex justify-content-start">
                        <button className='main-button mb-1'>MORE SERVICES</button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default InventorySection;