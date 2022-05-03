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
            <Row className='py-5'>
                {
                    services.map(service => <InventoryCart key={service.id} service={service} />)
                }
            </Row>
        </Container>
    );
};

export default InventorySection;