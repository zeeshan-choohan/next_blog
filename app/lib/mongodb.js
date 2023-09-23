import mongoose from "mongoose";

const connectMongoDb = async () =>{
  console.log('connect')
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Mongo Db")
    } catch (error) {
      console.log("error connecting to Mongo Db" , error);  
    }
};
export default connectMongoDb;