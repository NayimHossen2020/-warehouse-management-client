import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import ManageEachItem from '../ManageEachItem/ManageEachItem';

const ManageInventory = () => {
    const navigate = useNavigate();
    const [services, setServices] = useServices();

    return (
        <div>
            <h2>This is manage inventory page</h2>
            <button className='main-button' onClick={() => navigate('/addItems')}>Add new item</button>
            {
                services.map(service => <ManageEachItem key={service._id} service={service}></ManageEachItem>)
            }
        </div >
    );
};

export default ManageInventory;