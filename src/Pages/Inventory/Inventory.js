import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);

    return (
        <div className='inventory'>
            <button className='main-button' onClick={() => navigate('/manageInventory')}>Manage Inventory</button>
            <h2>This is Inventory: {service?.name}</h2>
        </div>
    );
};

export default Inventory;