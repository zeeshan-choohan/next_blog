import Blog from "@/app/components/Blog"
import BlogCard from "@/app/components/blogcard/page"
export default function AllBlog(){
    return(
<>
<Blog/>
<div className="flex m-2">   
        <BlogCard/> 
        </div>
        </>
    )
}