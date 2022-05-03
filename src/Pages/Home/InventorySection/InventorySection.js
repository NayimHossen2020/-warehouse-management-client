import React, { useEffect, useState } from 'react';
import './InventorySection.css';
import { Container, Row } from 'react-bootstrap';
import InventoryCart from '../InventoryCart/InventoryCart';

const InventorySection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <Container>
            <div className='inventory-title'>
                <p>Our Services</p>
                <h1>What we manage</h1>
            </div>
            <Row className='py-3'>
                {
                    services.map(service => <InventoryCart key={service.id} service={service} />)
                }
            </Row>

            <div className='d-flex align-items-center justify-content-center my-3'>
                <p className='fw-bold mt-2'>See what we can offer just for your needs</p>
                <button className='main-button mx-3 mb-1'>MORE SERVICES</button>
            </div>
        </Container>
    );
};

export default InventorySection;