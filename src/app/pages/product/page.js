"use client";

import { useState, useEffect } from 'react';
import Box from '@/app/components/Box';
import React from 'react';

const getApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
    return data;
}

const ProductPage = () => {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

   
    useEffect(() => {
        const fetchData = async () => {
            const products = await getApi();
            setData(products);
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    

    return (
        <div className='flex flex-col justify-center w-full gap-3 '>
            <h1 className="text-center font-bold text-3xl my-8">Product Page</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="block w-[50%] m-auto p-2  border border-gray-300 rounded mb-6"
            />

            <div className="flex flex-wrap w-[90%] m-auto gap-4">
                {filteredData.map((item) => (
                    <Box key={item.id} props={item} />
                ))}
            </div>

        </div>
    );
}

export default ProductPage;
