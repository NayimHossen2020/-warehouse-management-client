import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/services`;

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto py-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-3' placeholder='Name' {...register("name")} required />
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