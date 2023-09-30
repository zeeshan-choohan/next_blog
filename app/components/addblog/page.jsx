"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddBlog(){
const [title , setTitle] = useState("");
const [description , setdescription] = useState("");
const [imageUrl , setimageUrl] = useState("");
 

const route = useRouter();

const handleSubmit = async (e) =>{
e.preventDefault();
if(!title ||!description || !imageUrl){
    alert("Please Add name , email , imageLink are required.")
    return;
}
try {
   const res =  await fetch("http://localhost:3000/api/blog" ,{
        method : "POST",
        headers : {
            "Content-type": "application/json"
        },
        body : JSON.stringify({title ,description , imageUrl}),
    })

if(res.ok){
    route.push("/dashboard")
    alert("Blog Added");
}
else{
    throw new Error("Failed to Add a topis")
}
} catch (error) {
    console.log(error);
}
};

    return(
      <>

<div className="grid place-content-center h-screen">

<div className="shadow-lg p-5 rounded-lg border-r-4 border-green-400">
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input onChange={(e)=>setTitle(e.target.value)} value={title} className="input-field" type="text" name="name" placeholder="Enter Title Name" />
        <input  onChange={(e)=>setdescription(e.target.value)} value={description}  className="input-field" type="text" name="email" placeholder="Enter your description" />
        <input   onChange={(e)=>setimageUrl(e.target.value)} value={imageUrl} className="input-field" type="text" name="image" placeholder="Enter your image link" />
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit"> Add Blog</button>

    </form>
</div>

</div>
</>  
)
}