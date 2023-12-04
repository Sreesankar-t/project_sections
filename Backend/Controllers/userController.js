import User from "../Modals/userModal.js"

const register =(async(req,res,next)=>{
    try {
        const user = await new User(req.body)
     const saveUser  = user.save()
     res.status(200).json(saveUser)
    } catch (err) {
         next(err)
    }
     
})

export{register}