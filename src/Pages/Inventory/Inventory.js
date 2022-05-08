import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css';

const Inventory = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const restockRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://powerful-island-24401.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);

    const { _id, name, price, quantity, supplier, img, email, description } = service;

    const updateInfo = {
        _id: _id,
        name: name,
        price: price,
        quantity: quantity - 1,
        supplier: supplier,
        img: img,
        email: email,
        description: description
    };


    const handleDeliver = async (updateInfo) => {
        const url = `https://powerful-island-24401.herokuapp.com/services/${serviceId}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                setService(updateInfo)
                toast('One item deliver');
            });
    }

    const handleRestock = async (e) => {
        e.preventDefault();
        const restock = parseFloat(restockRef.current.value);

        const updateInfo = {
            _id: _id,
            name: name,
            price: price,
            quantity: quantity + restock,
            supplier: supplier,
            img: img,
            email: email,
            description: description
        };

        const url = `https://powerful-island-24401.herokuapp.com/services/${serviceId}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                setService(updateInfo)
                toast('Quantity Updated');
                e.target.reset();
            });
        console.log(restock);
    }

    return (
        <div>
            <Container className='inventory-card shadow-sm'>
                <Row className="p-4">
                    <Col sm={12} md={3}>
                        <img src={img} className="img-fluid rounded-start" alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Name-{name}</li>
                                <li className="list-group-item">Price-{price}</li>
                                <li className="list-group-item">Quantity-{quantity === 0 ? "Stock out" : quantity}</li>
                                <li className="list-group-item">Supplier-{supplier}</li>
                                <li className="list-group-item">Email-{email}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div>
                                <button className='main-button' onClick={() => handleDeliver(updateInfo)}>Deliver</button>
                                <div>
                                    <form onSubmit={handleRestock}>
                                        <input className='w-50 mt-5 mb-2 rounded' type="number" ref={restockRef} placeholder='Restock' required />
                                        <br />
                                        <input type="submit" value="Restock" className='main-button' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='d-flex justify-content-center'>
                        <button className='main-button' onClick={() => navigate('/manageInventory')}>Manage Inventory</button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Inventory;