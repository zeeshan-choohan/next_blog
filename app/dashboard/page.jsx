"use client";
import {useSession } from "next-auth/react";
import Blog from "@/app/components/Blog"
import BlogCard from "@/app/components/blogcard/page"
import { useState } from "react";
export default function AllBlog(){
const {data : session} = useSession();
    return(
<>
<Blog/>
<BlogCard /> 
       
        </>
    )
}