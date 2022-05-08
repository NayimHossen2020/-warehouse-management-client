import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const Update = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const onSubmit = async (updatedUser, e) => {
        const url = `https://powerful-island-24401.herokuapp.com/services/${id}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                toast('Item updated successful');
                e.target.reset();
            });

    }
    return (
        <div className='w-50 mx-auto py-4'>
            <h4 className='text-center my-3 fw-bold'>Update Item</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column main-form shadow-sm">
                <input className='mb-3 input-filed-style' placeholder='Name' {...register("name")} required />
                <input className='mb-3 input-filed-style' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-3 input-filed-style' placeholder='quantity' type="number" {...register("quantity")} required />
                <input className='mb-3 input-filed-style' placeholder='supplier' {...register("supplier")} required />
                <textarea className='mb-3 input-filed-style' placeholder='description' {...register("description")} required />
                <input className='mb-3 input-filed-style' placeholder='img' {...register("img")} required />
                <input className='main-button' type="submit" value="update item" />
            </form>
        </div>
    );
};

export default Update;