
  const errorHanddler =(err,req,res,next)=>{
    const errStatus = err.status || 500
    const message =  err.message || "something went worng"
    res.status(errStatus).json({
      success:false,
      status:errStatus,
      message:message,
      stack:err.stack
    })
  }

  export default errorHanddler