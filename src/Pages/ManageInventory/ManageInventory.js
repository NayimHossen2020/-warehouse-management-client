import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: "90vh" }}>
            <h2>This is manage inventory</h2>
            <button className='main-button' onClick={() => navigate('/addItems')}>Add new item</button>
        </div>
    );
};

export default ManageInventory;