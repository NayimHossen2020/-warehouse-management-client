import React from 'react';
import Banner from '../Banner/Banner';
import InventorySection from '../InventorySection/InventorySection';
import SafeStorage from '../SafeStorage/SafeStorage';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventorySection />
            <SafeStorage />
        </div>
    );
};

export default Home;