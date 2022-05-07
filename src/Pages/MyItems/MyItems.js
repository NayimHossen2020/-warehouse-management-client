import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const email = user.email;
            const url = `http://localhost:5000/services?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setItems(data);
        }
        getServices();
    }, [user])

    return (
        <div style={{ height: "90vh" }}>
            <h2>this is all added my items ={items.length}</h2>
        </div>
    );
};

export default MyItems;