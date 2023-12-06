import mongoose from "mongoose";

const connection = async()=>{

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("conneted to mongodb");
      } catch (error) {
        throw error;
      }
}

export default connection