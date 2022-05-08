import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const SingleMyItems = ({ singItem }) => {
    const { _id, name, img, price, supplier, quantity, email } = singItem;
    const [services, setServices] = useServices();
    const navigate = useNavigate();

    const deleteSingleItem = async (id) => {

        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://powerful-island-24401.herokuapp.com/services/${id}`;
            await fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(ser => ser._id !== id);
                    setServices(remaining);
                });
        }
    };
    return (
        <Col sm={12} md={3} className='d-flex'>
            <Card className="p-3 mb-3 rounded shadow-sm">
                <Card.Img style={{ width: '150px', height: "150px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Email: {email}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>Supplier: {supplier}</Card.Text>
                    <button className='main-button me-2' onClick={() => navigate(`/update/${_id}`)}>Update</button>
                    <button className='main-button' onClick={() => deleteSingleItem(_id)}>Delete</button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default SingleMyItems;