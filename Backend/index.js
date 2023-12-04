
import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './Routes/userRoutes.js'
import hotelRoute from './Routes/hotelRoutes.js'
const app = express()
dotenv.config()
const PORT =process.env.PORT
const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("conneted to mongodb");
      } catch (error) {
        throw error;
      }
}

//middleware
app.use(express.json())
app.use('/api/user',userRoute)
app.use('/api/hotel',hotelRoute)

app.use((err,req,res,next)=>{
  const errStatus = err.status || 500
  const message =  err.message || "something went worng"
  res.status(errStatus).json({
    success:false,
    status:errStatus,
    message:message,
    stack:err.stack
  })
})

app.listen(PORT,()=>{
   console.log("connected to backend");
   connection()
})
