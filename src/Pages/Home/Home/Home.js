import React from 'react';
import Banner from '../Banner/Banner';
import InventorySection from '../InventorySection/InventorySection';
import SafeStorage from '../SafeStorage/SafeStorage';
import WorkSystem from '../WorkSystem/WorkSystem';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventorySection />
            <SafeStorage />
            <WorkSystem />
        </div>
    );
};

export default Home;