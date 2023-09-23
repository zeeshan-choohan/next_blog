import mongoose , {Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
}, {timestamps : true})

// if(mongoose.models["userdata"]){
//     delete mongoose.models["userdata"]
// }

const User =  mongoose.models.userdata ||   mongoose.model("userdata" ,userSchema)
export default User;
