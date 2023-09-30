import mongoose , {Schema } from "mongoose";

const blogSchema = new Schema({
    title : {
        type : String,
    },
    description : {
        type : String,
    },
    imageUrl : {
        type : String,
    },
    userUid : {
        type : String,
    },
}, {timestamps : true})


if(mongoose.models["blogdata"]){
    delete mongoose.models["blogdata"]
}
const UserBlog =  mongoose.model("blogdata" ,blogSchema)
export default UserBlog;
