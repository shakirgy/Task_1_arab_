const user=require('../Models/userSchema');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({ id },process.env.JWT_SECRET,{expiresIn:'1d'});
}

const loginUser=async (req,res)=>{
    const {name,password}=req.body
try{
    const dbname=await user.findOne({name})
    if(!dbname){
        return res.status(401).json({msg:"Invalid User"});
    }else{
        const match= await bcrypt.compare(password, dbname.password)
        if(match){
            const userDetails=await user.findOne({name}).select("-password")
            res.status(409).json({message:"Login Success",token:generateToken(userDetails._id),userDetails})
        }
    }
}catch(err){
    console.log(`error in logingin the user ${err}`);
}
}

module.exports=loginUser;