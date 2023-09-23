import connectMongoDb from "@/app/lib/mongodb";
import UserBlog from "@/app/models/BlogSchema";
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
      const { title, description, imageUrl } = await req.json();
    await connectMongoDb();
      let result = UserBlog({ title, description, imageUrl });
      await result.save();
      // await userdata.save({name,email,hashedPassword});
      return NextResponse.json({ message: "Blog Added" }, { status: 201 });
  
    } catch (error) {
      return NextResponse.json({ mesage: error },
        { status: 500 });
    }
  }


  export async function GET(req){
    await connectMongoDb();
    let data = await UserBlog.find()
    console.log(data)
    return NextResponse.json({
      data:data,
      getdata:"get data"
    })
  }

  export async function DELETE(request){
const id = request.nextUrl.searchParams.get("id")
await connectMongoDb();
await UserBlog.findByIdAndDelete(id);
return NextResponse.json({message : "Topic Deleted"}, {status : 200});
  }







