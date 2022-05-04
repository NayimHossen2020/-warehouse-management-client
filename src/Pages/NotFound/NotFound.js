import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div style={{ height: "90vh" }}>
            <div className='not-found-div mt-5'>
                <div className='p-5'>
                    <h2>404 Not found !!!</h2>
                    <p>The page you are looking for was not found.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;