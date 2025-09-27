import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, price, quantity, photo } = coffee;
    return (
        <div className='flex px-20 mt-10 bg-[#F5F4F1] shadow-sm rounded'>
            <div className='flex h-[500px] w-1/2'>
                <img src={photo} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className="font-bold">{name}</h2>
                <p><span className='font-bold'>Quantity:</span> {quantity}</p>
                <p><span className='font-bold'>Price:</span> {price}</p>
            </div>

            
        </div>

    );
};

export default CoffeeDetails;