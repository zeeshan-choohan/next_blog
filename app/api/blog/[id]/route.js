import connectMongoDb from "@/app/lib/mongodb";
import UserBlog from "@/app/models/BlogSchema";
import { NextResponse } from "next/server";

export async function PUT(request , {params}){
    const {id} = params;
    const { title , description ,  imageUrl} = await request.json();
    await connectMongoDb();
    await UserBlog.findByIdAndUpdate( id , {title , description , imageUrl })
    return NextResponse.json({messsage : "Blog Updated"}, {status : 200})
}

export async function DELETE(request, {params}){
    const id = request.nextUrl.searchParams.get("id")

    // let id = content.params.id
    // console.log(id)
    // let record = { _id: id }
    await connectMongoDb();
    await UserBlog.deleteOne(id);
    return NextResponse.json({message : "Topic Deleted"}, {status : 200});
      }
export async function GET(request , {params}){
const {id} = params;
await connectMongoDb();
const userBlogdata = await UserBlog.findOne({_id : id});
return NextResponse.json({userBlogdata},{status : 200});


}