import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const ShowProducts = () => {
    const [data, setData] = useState([])
    const [gotdata, setGotData] = useState([]);
    const [gotCategory, setGotCategory] = useState([])
    const [isActive, setIsActive] = useState(false);
    const [btnActive,setBtnActive] =useState(null)

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => {
                setGotData(data);
                setData(data);
            })
    }, []);

    useEffect(() => {
        fetch('../category.json')
            .then(res => res.json())
            .then(data => {
                setGotCategory(data);
            })
    }, []);

    const handleCategoryBtn = (c) => {
        const selected = data.filter(data => data.category === c)
        setGotData(selected);
        setIsActive(true);
    }

    const handleAllProduct = () => {
        setGotData(data)
        setIsActive(false);
        setBtnActive(null)
    }

    const handleCategoryStyle = (i) => {
        setBtnActive(i)
    }

    return (
        <div>
            <div className='mt-16'>
                <h1 className='text-center text-4xl font-semibold'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='grid md:grid-cols-[1fr,6fr] my-12 mx-4 md:mx-32 gap-10'>
                <div className='bg-slate-100 max-h-[380px] grid grid-cols-1 gap-2 items-center p-2 rounded-xl border-white justify-start'>
                    <button onClick={handleAllProduct} className={`py-2 px-8 border rounded-full font-semibold ${isActive ? 'bg-white' : 'bg-[#9538E2] text-white'}`}>All Products</button>
                    {
                        gotCategory.map(data =>  <button key={data.id} onClick={() => { handleCategoryBtn(data.category); handleCategoryStyle(data.id) }} className={`py-2 px-8 border rounded-full font-semibold ${btnActive === data.id ? 'bg-[#9538E2] text-white' : 'bg-white '}`}>{data.category}</button>)
                    }
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        gotdata.map(data => <Product key={data.id} data={data}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;