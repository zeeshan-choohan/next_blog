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

    const loadingdata=()=>{
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
        const searchTerm = e.target.value.toLowerCase();

        // console.log(searchTerm)
        if (datas.length >= 0) {
            const results = datas.filter((item) =>
                item.name.toLowerCase().includes(searchTerm)
            );
            setSearchTerm(e.target.value);
            setSearchResults(results);
        }
    }

    const deletess=(id)=>{
        console.log(id)
        const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: `http://localhost:3000/api/blog/${id}`,
  headers: { }
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
           <div className='max-w-[1240px] mx-auto md:grid grid-cols-4 gap-4'>
            {datas.length == 0 ?
                <h1>loadding..</h1>
                : datas.map((v, i) => {
                    return <div>
                        <div className="flex  m-2 w-72 h-96">
                            <div className="max-w-sm  rounded overflow-hidden shadow-lg m-2">
                                <img style={{height:200,width:100+'%'}} src={v.imageUrl}  />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{v.title}</div>
                                    <p className="text-gray-700 text-base h-5 overflow-hidden">
                                        {v.description}
                                    </p>

                                    <div className="px-6 pt-4 pb-2">  <div className="flex gap-4">                                       
                          <DeleteBtn  click={()=>deletess(v._id)}/>  
                         <Link href={`/components/editblogform/${v._id}`}>

                         <HiPencilAlt size={30} />        </Link>      
                         
                                                           </div>

                         
                         
                          </div> 

                                </div>
                               
                            </div>
                           
                        </div>     
                    </div>



                })}
                </div>

        </>
    )
}
export default Card;