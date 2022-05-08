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
        const url = `https://powerful-island-24401.herokuapp.com/services`;

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
            <h2 className='text-center mb-3'>Add Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column main-form shadow-sm">
                <input className='mb-3 input-filed-style' placeholder='name' {...register("name")} required />
                <input className='mb-3 input-filed-style' placeholder='email' {...register("email")} value={user.email} readOnly required />
                <input className='mb-3 input-filed-style' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-3 input-filed-style' placeholder='quantity' type="number" {...register("quantity")} required />
                <input className='mb-3 input-filed-style' placeholder='supplier' {...register("supplier")} required />
                <textarea className='mb-3 input-filed-style' placeholder='description' {...register("description")} required />
                <input className='mb-3 input-filed-style' placeholder='img' {...register("img")} required />
                <input className='main-button' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;