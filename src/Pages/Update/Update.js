import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const onSubmit = async (updatedUser) => {
        const url = `http://localhost:5000/services/${id}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

    }
    return (
        <div className='w-50 mx-auto py-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-3' placeholder='Name' {...register("name")} required />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} required />
                <input className='mb-3' placeholder='supplier' {...register("supplier")} required />
                <textarea className='mb-3' placeholder='description' {...register("description")} required />
                <input className='mb-3' placeholder='img' {...register("img")} required />
                <input className='main-button' type="submit" value="update item" />
            </form>
        </div>
    );
};

export default Update;