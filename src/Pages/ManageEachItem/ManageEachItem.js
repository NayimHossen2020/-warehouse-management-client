import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ManageEachItem = ({ service }) => {
    const { _id, name, price, quantity, supplier, img } = service;
    const [services, setServices] = useServices();
    const navigate = useNavigate();

    const deleteSingleItem = async (id) => {

        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`;
            await fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(ser => ser._id !== id);
                    setServices(remaining);
                });
        }
    };

    return (
        <div className='d-flex'>
            <h4>{name}</h4>
            <div>
                <button onClick={() => navigate(`/update/${_id}`)}>Update</button>
                <button onClick={() => deleteSingleItem(_id)}>Delete</button>
            </div>
        </div >
    );
};

export default ManageEachItem;