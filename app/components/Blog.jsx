"use client";

import {useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
// import NextAuth from "next-auth/next";
// import { useRouter } from "next/navigation";


export  default  function Blog(){
    const [navbar, setNavbar] = useState(false);
    // const router = useRouter();
    // const handleLogout = async () => {
    //     // NextAuth.signOut();
    //     await signOut()
    //     router.push('/components/login');
    //   };

    const handleLogout = async () => {
        await signOut()
      };


const {data : session} = useSession();

    return(
<>
        <nav className="w-full bg-green-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href= "#">
                <h2 className="text-2xl text-white font-bold">Home</h2>
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
                  <Link href={"/components/myblog"}>
                    My Blog
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




       {/* <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 ">
        <div>
            Name : <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
            Email : <span className="font-bold">{session?.user?.email}</span>
        </div>   

    </div>
       </div> */}

       </>
    )
}