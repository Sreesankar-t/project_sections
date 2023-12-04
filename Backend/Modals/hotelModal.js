import mongoose from 'mongoose';

const hotelModal = new mongoose.Schema({
    name :{
       type: String,
        required:true,
    },
    type:{
      type:String ,
      required:true,
    }
})

const Hotel = mongoose.model('Hotel', hotelModal);

export default Hotel;