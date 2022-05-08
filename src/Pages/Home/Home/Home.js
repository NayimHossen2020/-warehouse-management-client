import React from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import InventorySection from '../InventorySection/InventorySection';
import SafeStorage from '../SafeStorage/SafeStorage';
import WorkSystem from '../WorkSystem/WorkSystem';
import './Home.css';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner />
            <InventorySection />
            <SafeStorage />
            <WorkSystem />
        </div>
    );
};

export default Home;