export default function AddBlog(){
    return(
      <>

<div className="grid place-content-center h-screen">

<div className="shadow-lg p-5 rounded-lg border-r-4 border-green-400">
    <form className="flex flex-col gap-3">

        <input className="input-field" type="text" name="name" placeholder="Enter your Name" />
        <input  className="input-field" type="text" name="email" placeholder="Enter your Description" />
        <input  className="input-field" type="text" name="image" placeholder="Enter your image link" />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit"> Add Blog</button>

    </form>
</div>

</div>
</>  
)
}