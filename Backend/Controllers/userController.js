import User from "../Modals/userModal.js"

const postData =(async(req,res,next)=>{
     console.log(req.body);
    const post = await new User(req.body)
try {
     const savePost = await post.save()
     res.status(200).json(savePost)
 
} catch (error) {
     next(error)
}     
})

const getData =(async(req,res,next)=>{  
    const post = await  User.find()
try {  
     res.status(200).json(post)
    
} catch (error) {
     next(error)
}     
})


const detleData = async (req, res, next) => {
   
     try {
      
        await User.findOneAndDelete({ content: req.body.data });
   
       res.status(200).json({ message: 'Successfully deleted the post' });
       console.log('Successfully delete the post:');
     } catch (error) {
       next(error);
     }
   };
   


export{postData,getData,detleData}