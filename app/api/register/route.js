import userdata from "@/app/models/userSchema"
import connectMongoDb  from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req){
  await connectMongoDb();
  let data=await userdata.find()
  console.log(data)
  return NextResponse.json({
    data:data,
    getdata:"get data"
  })
}

export async function POST(req) {

  try {
    const { name, email, password } = await req.json();

    // console.log("Name :" , name);
    // console.log("Name :" , email);
    // console.log("Name :" , password);
    //  return NextResponse.json({message : "user register"},{status : 201});
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDb();
    let result = userdata({ name, email,password: hashedPassword });
    await result.save();
    // await userdata.save({name,email,hashedPassword});
    return NextResponse.json({ message: "user register" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ mesage: error },
      { status: 500 });
  }
}
