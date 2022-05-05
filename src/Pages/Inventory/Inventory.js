import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);

    return (
        <div style={{ height: "90vh" }}>
            <h2>This is Inventory: {service?.name}</h2>
        </div>
    );
};

export default Inventory;