import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/services`;

        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         toast("Item added successful");
        //         e.target.reset();
        //     })

        axios.post(url, data)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Data add successful');
                    e.target.reset();
                }
            })
    };

    return (
        <div className='w-50 mx-auto py-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-3' placeholder='name' {...register("name")} required />
                <input className='mb-3' placeholder='email' {...register("email")} value={user.email} readOnly required />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} required />
                <input className='mb-3' placeholder='supplier' {...register("supplier")} required />
                <textarea className='mb-3' placeholder='description' {...register("description")} required />
                <input className='mb-3' placeholder='img' {...register("img")} required />
                <input className='main-button' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;