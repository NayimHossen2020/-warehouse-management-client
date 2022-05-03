import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './InventoryCart.css';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrUser } from 'react-icons/gr';
import { GrDocumentStore } from 'react-icons/gr';

const InventoryCart = ({ service }) => {
    const { name, img, price, quantity, supplier, description } = service;

    return (
        <Col sm={12} md={4}>
            <Card border="light" style={{ borderColor: "none" }} className='mb-3 shadow-sm'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div>
                        <h6><GrDocumentStore className='icon-style' /> Quantity- ({quantity})</h6>
                        <h6><GrUser className='icon-style' /> Supplier-({supplier})</h6>
                    </div>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <h4><BsCurrencyDollar />{price}</h4>
                        <button className='main-button'>MANAGE</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InventoryCart;