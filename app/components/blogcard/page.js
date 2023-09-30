'use client'
import React, { useEffect, useState } from 'react';
import DeleteBtn from '../DeleteBtn';
import { HiPencilAlt } from "react-icons/hi";
import Link from 'next/link';

import axios from 'axios';

function Card() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);



    let [datas, setdata] = useState([])
    let [loading, setloading] = useState(false)
    let press = () => {
        console.log("hello")
    }

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/blog',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data.data));
                setdata(response.data.data)
                setloading(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [loading])

    const loadingdata = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/blog',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data.data));
                setdata(response.data.data)
                setloading(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handlechange = (e) => {
        const search = e.target.value.toLowerCase();

        // console.log(searchTerm)
        if (datas.length >= 0) {
            const results = datas.filter((item) =>
                item.title.toLowerCase().includes(search)
            );
            setSearchTerm(e.target.value);
            setSearchResults(results);
        }
    }

    const deletess = (id) => {
        console.log(id)
        const axios = require('axios');

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/blog/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                loadingdata()
            })
            .catch((error) => {
                console.log(error);
            });


    }
    return (

        <>
            <form className='m-2'>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" onChange={handlechange} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
            </form>

            <div className="flex m-2">
                <div className='max-w-[1240px] mx-auto md:grid grid-cols-4 gap-4'>
                    {searchResults.length == 0 ?
                        datas.map((v, i) => {
                            return <div>
                                <div className="flex  m-2 w-72 h-96">
                                    <div className="max-w-sm  rounded overflow-hidden shadow-lg m-2">
                                        <img style={{ height: 200, width: 100 + '%' }} src={v.imageUrl} />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{v.title}</div>
                                            <p className="text-gray-700 text-base h-5 overflow-hidden">
                                                {v.description}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        })
                        :
                        searchResults.map((v, i) => {
                            return <div>
                                <div className="flex  m-2 w-72 h-96">
                                    <div className="max-w-sm  rounded overflow-hidden shadow-lg m-2">
                                        <img style={{ height: 200, width: 100 + '%' }} src={v.imageUrl} />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{v.title}</div>
                                            <p className="text-gray-700 text-base h-5 overflow-hidden">
                                                {v.description}
                                            </p>

                                            <div className="px-6 pt-4 pb-2">  <div className="flex gap-4">
                                                <DeleteBtn click={() => deletess(v._id)} />

                                                <Link href={`/components/editblogform/${v._id}`}>

                                                    <HiPencilAlt size={30} />        </Link>
                                            </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        })
                    }
                </div></div>

        </>
    )
}
export default Card;