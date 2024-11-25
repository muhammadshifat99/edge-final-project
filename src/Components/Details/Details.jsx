import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreCart, addToStoreWish } from '../Utilities/addToDb';


const Details = () => {
    const [btnDisabled, setBtnDisabled] = useState(false);

    const productData = useLoaderData();
    const { id } = useParams();
    const product_id = parseInt(id);

    const clickedProduct = productData.find(data => product_id === data.id)

    const { product_title, price, product_image, availability, description, specification, rating, id: selectedId
    } = clickedProduct

    const handleDisable = () => {
        setBtnDisabled(!false)
    }

    return (
        <div className=''>

            <div className=''>
                <div className='bg-[#9538E2] flex flex-col justify-center items-center pt-4 md:pt-8 pb-32 md:pb-56'>
                    <h1 className='text-white font-bold  text-center text-2xl md:text-3xl  md:max-w-5xl mx-auto'>Product Details</h1>
                    <p className='text-white pt-4 pb-6 text-center md:max-w-2xl max-w-96 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className='md:h-96 h-[680px]'>
                <div className='md:h-64 relative flex justify-center'>
                    <div className='absolute grid md:grid-cols-2 gap-8 bg-white mt-5 border max-w-96 md:max-w-6xl mx-auto p-5 rounded-xl backdrop-blur-5xl -top-28 md:-top-60'>
                        <div className=''>
                            <img className='rounded-lg h-full w-full' src={product_image} alt="" />
                        </div>
                        <div className='space-y-4'>
                            <h2 className="text-3xl font-semibold">{product_title}</h2>
                            <p className='text-[#09080F99] text-lg font-semibold'>Price : ${price}</p>
                            <p className='bg-[#309C081A] border border-[#309C08] rounded-full py-1 px-6 font-medium text-[#309C08] inline-block'>{`${availability ? "In Stock" : "Out of Stock"}`}</p>
                            <p className='text-[#09080F99] text-lg'>{description}</p>
                            <div>
                                <h3 className='text-[#09080F] text-lg font-bold'>Specification:</h3>
                                <ol className='list-decimal ml-4 text-[#09080F99]'>
                                    <li>{specification.processor}th Gen</li>
                                    <li>{specification.RAM} RAM</li>
                                    <li>{specification.storage}</li>
                                    <li>{specification.display}</li>
                                </ol>
                            </div>
                            <div>
                                <h3 className='text-[#09080F] text-lg font-bold'>Rating</h3>
                                <div className='flex gap-2 items-center justify-start'>
                                    <div className='flex text-yellow-400 text-xl'>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStarHalf></FaStarHalf>
                                    </div>
                                    <div><p className='py-1 px-2 bg-slate-200 rounded-3xl text-[#09080F99]'>{rating}</p></div>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <div>
                                    <button onClick={() => { addToStoreCart(selectedId) }} className="flex items-center gap-2 border btn-ghost font-semibold bg-[#9538E2] rounded-3xl py-2 px-8 text-white hover:text-[#9538E2]">Add To Cart<RiShoppingCartLine></RiShoppingCartLine></button>
                                </div>
                                <div onClick={handleDisable}>
                                    <button onClick={() => addToStoreWish(selectedId)} disabled={btnDisabled} className='p-2 border-2 bg-white text-red-600 text-xl rounded-full'><MdOutlineFavoriteBorder></MdOutlineFavoriteBorder></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;