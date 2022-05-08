import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import ManageEachItem from '../ManageEachItem/ManageEachItem';
import { Container, Row } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ManageInventory = () => {
    const navigate = useNavigate();
    const [services, setServices] = useServices();

    return (
        <Container>
            <PageTitle title="Manage Items"></PageTitle>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <div>
                    <h2 className='my-2'>Manage Inventory</h2>
                    <button className='main-button text-center' onClick={() => navigate('/addItems')}>Add new item</button>
                </div>
            </div>
            <Row>
                {
                    services.map(service => <ManageEachItem key={service._id} service={service}></ManageEachItem>)
                }
            </Row>
        </Container >
    );
};

export default ManageInventory;