const user=require('../Models/userSchema');

const checkAdmin=async (req,res,next)=>{
    try{
        const user=await user.findOne((u)=> u.id === req.user.id);
        if(user && user.userrole ==='admin'){
            next();
        }else{
            res.status(403).json({message:"You are not admin"})
        }
    }catch(err){
        console.log(`error in middleware ${err}`);
    }
}

module.exports=checkAdmin;