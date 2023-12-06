import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  
 content:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  }

});

const User = mongoose.model('User', userSchema);

export default User;