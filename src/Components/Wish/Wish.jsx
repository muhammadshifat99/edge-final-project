import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWish } from '../Utilities/addToDb';
import WishCard from '../WishCard/WishCard';
import { removeStoreWish } from '../Utilities/addToDb';

const Wish = () => {
    const [wishList, setWishList] = useState([]);

    const allData = useLoaderData();

    useEffect(() => {
        const wishData = getStoredWish();
        const wishDataInt = wishData.map((id) => parseInt(id));

        const wished = allData.filter(data => wishDataInt.includes(data.id));
        setWishList(wished);
    }, [])

    const handleDelete = (id) => {
        const remainig = wishList.filter(list => list.id !== id)
        setWishList(remainig);
        removeStoreWish(id)
    }

    return (
        <div className='my-12 mx-4 md:mx-32'>
            <div>
                <h1 className='text-2xl font-semibold'>WishList</h1>
            </div>
            <div className='grid gap-8 mt-5'>
                {
                    wishList.map(data=> <WishCard handleDelete={handleDelete} key={data.id} data={data}></WishCard>)
                }
            </div>
        </div>
    );
};

export default Wish;