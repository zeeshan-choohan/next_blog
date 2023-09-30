'use client'
import React, { useEffect, useState } from 'react';
import DeleteBtn from '../DeleteBtn';
import { HiPencilAlt } from "react-icons/hi";
import Link from 'next/link';

import axios from 'axios';

function Card() {
    const [navbar, setNavbar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    


    let [datas, setdata] = useState([])
    let [loading, setloading] = useState(false)
    let press=()=>{
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

        const handleLogout = async () => {
      //await signOut();
      };
    return (

        <>

<nav className="w-full bg-green-800 shadow"> 
 <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
      <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
             <Link href="/dashboard">
               <h2 className="text-2xl text-white font-bold">Footrip</h2>
             </Link>
           <div className="md:hidden">
         <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white text-xl font-bold">
                  <Link href="/components/addblog">
                  Add Blog
                  </Link>
                </li>
            
               
                <li className="text-white text-xl font-bold">
                <Link href={"/components/login"} onClick={handleLogout} >Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>




         <form className='m-2'>   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={handlechange}   className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>  

<div className="flex m-2">   
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-4 gap-4'>
                {searchResults.length==0?
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

                                    <div className="px-6 pt-4 pb-2"> 
                                     <div className="flex gap-4">
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

