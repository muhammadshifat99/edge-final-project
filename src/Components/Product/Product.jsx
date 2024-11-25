import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ data }) => {
    
    const {product_title,price,product_image,id} = data
    return (
        <div className="card card-compact shadow-lg">
            <figure className='p-4'>
                <img
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-[#09080F99] text-lg font-semibold'>Price : ${price}</p>
                <div className="card-actions justify-start">
                    <NavLink to={`product/${id}`}>
                    <button className="bg-white border btn-ghost font-semibold border-[#9538E2] rounded-3xl py-2 px-8 text-[#9538E2]">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;