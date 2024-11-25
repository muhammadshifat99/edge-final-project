import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const CartCard = ({ data,handleDelete }) => {

    const { price, description, product_title, product_image, id } = data
    return (
        <div className='grid md:grid-cols-[1fr_4fr] gap-8 border rounded-lg p-4'>
            <div className=''>
                <img className='w-full rounded-md' src={product_image} alt="" />
            </div>
            <div className='md:flex items-center justify-between'>
                <div className='space-y-4'>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className='text-[#09080F99] text-lg'><span className='text-xl font-medium text-black'>Description : </span>{description}</p>
                    <p className='text-[#000] text-lg font-semibold '>Price : ${price}</p>
                   
                </div>
                <div className='flex items-start justify-end'>
                    <button onClick={() => handleDelete(id)} className='text-4xl text-red-600'><TiDeleteOutline></TiDeleteOutline></button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;