"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import axios from 'axios';
import Link from "next/link";


export default function EditBlogForm(params) {

  // const routes = useRouter();

  const { editid } = params.params
  let [dataupdate, setdataupdate] = useState({
    title: "",
    description: "",
    imageUrl: "",
  })
  let [loading, setloading] = useState(true)

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/blog/${editid}`,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        setdataupdate(response.data.userBlogdata)
        console.log(dataupdate);
        setloading(false)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [loading])


  let handlechange = (e) => {
    e.preventDefault()
    setdataupdate({ dataupdate, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
    let config = {
      method: "PUT",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/blog/${editid}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: dataupdate,
      catch : "no-store"
    };

    await axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // routes.push("/dashboard")
        // routes.refresh()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="grid place-content-center h-screen">

        <div className="shadow-lg p-5 rounded-lg border-r-4 border-green-400">
          <form   className="flex flex-col gap-3">

            <input onChange={handlechange}  value={dataupdate.title} className="input-field" type="text" name="title" placeholder="Enter your Name" />
            <input onChange={handlechange} value={dataupdate.description} className="input-field" type="text" name="description" placeholder="Enter your Description" />
            <input onChange={handlechange} value={dataupdate.imageUrl} className="input-field" type="text" name="imageUrl" placeholder="Enter your image link" />
            <Link href={"/dashboard"} onClick={handleSubmit} className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Blog</Link>
          </form>
        </div>
      </div>
    </>
  )
}
