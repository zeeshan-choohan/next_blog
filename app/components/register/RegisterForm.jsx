"use client"


import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All field are necessary.")
            return;
        }
        try {

       const resUserExists = await fetch("/api/userexists" , {
         method : "POST",
         headers :{
            "Content-Type": "application/json",

         },
       
        body : JSON.stringify({email}),
       });

       const {user} = await resUserExists.json();
       
       if(user){
        setError("User Already Exists.");
        return ;
       }


            const res =  await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if(res.ok){
                const form =  e.target;
                form.reset();
                router.push("/components/login")
            } else {
                console.log("User registration Failed")
            }
        } catch (error) {
            console.log("Error during registration : ", error)
        }
    };

    return (
        <div className="grid place-content-center h-screen">

            <div className="shadow-lg p-5 rounded-lg border-r-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form method="POST"  onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input onChange={(e) => setName(e.target.value)} className="input-field" type="text" name="name" placeholder="Enter your Full Name" />
                    <input onChange={(e) => setEmail(e.target.value)} className="input-field" type="text" name="email" placeholder="Enter your Email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" name="password" placeholder="Enter your Password" />
                    <button className="bg-green-600 text-white  font-bold  cursor-pointer px-6 py-2 ">Register</button>

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3  rounded-md mt-2">{error}</div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/components/login"}>Already have an account ? <span className="underline">Login</span></Link>
                </form>
            </div>

        </div>
    )
}