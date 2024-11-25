import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { RiShoppingCartLine } from 'react-icons/ri';
import { addToStoreCart } from '../Utilities/addToDb';

const WishCard = ({ data,handleDelete }) => {
    
    const { price, description, product_title, product_image,id } = data

    return (
        <div className='grid md:grid-cols-[1fr_3fr] gap-8 border rounded-lg p-4'>
            <div className=''>
                <img className='w-full rounded-md' src={product_image} alt="" />
            </div>
            <div className='md:flex items-center justify-between'>
                <div className='space-y-4'>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className='text-[#09080F99] text-lg'><span className='text-xl font-medium text-black'>Description : </span>{description}</p>
                    <p className='text-[#000] text-lg font-semibold '>Price : ${price}</p>
                    <button onClick={() => addToStoreCart(id)} className="flex items-center gap-2 border btn-ghost font-semibold bg-[#9538E2] rounded-3xl py-2 px-8 text-white hover:text-[#9538E2]">Add To Cart<RiShoppingCartLine></RiShoppingCartLine></button>
                </div>
                <div className='flex items-start justify-end'>
                    <button onClick={()=>handleDelete(id)} className='text-4xl text-red-600'><TiDeleteOutline></TiDeleteOutline></button>
                </div>
            </div>
        </div>
    );
};

export default WishCard;