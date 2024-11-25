import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { getStoredCart } from '../Utilities/addToDb';
import { useEffect } from 'react';
import CartCard from '../CartCard/CartCard';
import { removeStoreCart } from '../Utilities/addToDb';
import logoImage from '../../assets/Group.png'
import { removeAllStoreCart } from '../Utilities/addToDb';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate()
    
    const [cartList, setCartList] = useState([]);
    const allData = useLoaderData();

    useEffect(() => {
        const cartData = getStoredCart();
        const cartDataInt = cartData.map((id) => parseInt(id));

        const addedCart = allData.filter(data => cartDataInt.includes(data.id));
        setCartList(addedCart);
    }, [])

    const handleDelete = (id) => {
        const remainig = cartList.filter(list => list.id !== id)
        setCartList(remainig);
        removeStoreCart(id);
    }

    const sum = cartList.reduce((accumulator, cart) => accumulator + cart.price, 0);
    const finaleSum = Math.round(sum)

    const handleShort = () => {
        const sorted = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sorted);
    }

    const handleClose = () => {
        navigate('/')
    }

    return (
        <div className='my-12 mx-4 md:mx-32'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-semibold'>Cart</h1>
                </div>
                <div className='flex items-center justify-end gap-8'>
                    <h2 className='text-2xl font-semibold'>Total Cost : ${finaleSum}</h2>
                    <button onClick={handleShort} className='border-2 border-[#9538E2] text-[#9538E2] text-lg font-semibold rounded-full py-2 px-8'>Sort by Price</button>
                    <button onClick={() => { document.getElementById('my_modal_1').showModal(); removeAllStoreCart();}} className='text-[#fff] border-2 border-[#9538E2] bg-[#9538E2] text-lg font-semibold rounded-full py-2 px-8'>Purchase</button>
                </div>
            </div>
            <div className='grid gap-8 mt-5'>
                {
                    cartList.map(data => <CartCard handleDelete={handleDelete} key={data.id} data={data}></CartCard>)
                }
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="flex flex-col justify-center items-center modal-box">
                    <img src={logoImage} alt="" />
                    <h3 className="font-bold text-lg mt-5">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <p>Total: ${finaleSum}</p>
                    <div className="flex items-center justify-center modal-action">
                        <form method="dialog">
                            <button onClick={handleClose} className='text-[#fff] border-2 border-[#9538E2] bg-[#9538E2] text-lg font-semibold rounded-full py-1 px-8'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
           
        </div>
    );
};

export default Cart;