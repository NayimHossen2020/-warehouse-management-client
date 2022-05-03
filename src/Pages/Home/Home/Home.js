import React from 'react';
import Banner from '../Banner/Banner';
import InventorySection from '../InventorySection/InventorySection';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventorySection />
        </div>
    );
};

export default Home;