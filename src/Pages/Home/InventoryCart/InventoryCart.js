import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './InventoryCart.css';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { ImListNumbered } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const InventoryCart = ({ service }) => {
    const { _id, name, img, price, quantity, supplier, description } = service;
    const navigate = useNavigate();

    return (
        <Col sm={12} md={4}>
            <Card border="light" style={{ borderColor: "none" }} className='mb-3 shadow-sm'>
                <div className='service-img me-auto p-3'>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div>
                        <h6><ImListNumbered className='icon-style' /> Quantity- ({quantity})</h6>
                        <h6><FaUserCircle className='icon-style' /> Supplier-({supplier})</h6>
                    </div>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <h4 className='fw-bold'><BsCurrencyDollar className='icon-style' />{price}</h4>
                        <button onClick={() => navigate(`/inventory/${_id}`)} className='main-button'>MANAGE</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InventoryCart;