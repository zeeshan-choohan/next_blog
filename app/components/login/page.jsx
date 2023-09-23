"use client"
import Link from "next/link"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
try {
  const res =   await signIn("credentials" , {
        email,
        password,
        redirect : false,
    });

if(res.error){
setError("Invalid Credientials");
return;
}
router.push("/dashboard")
} catch (error) {
    console.log(error);
}
    };


    return (
        <>
            <div className="grid place-content-center h-screen">

                <div className="shadow-lg p-5 rounded-lg border-r-4 border-green-400">
                    <h1 className="text-xl font-bold my-4 ">Login Page</h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                        <input onChange={(e) => setEmail(e.target.value)} className="input-field" type="text" name="email" placeholder="Enter your Email" />
                        <input onChange={(e) => setPassword(e.target.value)} className="input-field" type="password" name="password" placeholder="Enter your Password" />
                        <button className="bg-green-600 text-white  font-bold  cursor-pointer px-6 py-2 ">Login</button>
                        {error && (
                             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3  rounded-md mt-2">{error}</div>
                        )}
        
                        <Link className="text-sm mt-3 text-right" href={"/components/register"}>Don't have an account ? <span className="underline">Register</span></Link>
                    </form>
                </div>

            </div>
        </>
    )
}