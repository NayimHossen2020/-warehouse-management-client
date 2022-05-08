import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './MyItems.css';
import SingleMyItems from '../../Pages/SingleMyItems/SingleMyItems';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setItems(data);
        }
        getServices();
    }, [user]);

    return (
        <div style={{ height: "90vh" }}>
            {
                items.map(item => <SingleMyItems key={item._id} item={item}></SingleMyItems>)
            }
        </div>
    );
};

export default MyItems;