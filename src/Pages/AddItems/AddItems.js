import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/services`;

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
            <PageTitle title="Add Item"></PageTitle>
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