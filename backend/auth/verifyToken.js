import jwt from 'jsonwebtoken';
import Professor from "../Modals/ProfessorSchema.js";
import User from "../Modals/UserSchema.js";

export const authenticate = async(req,res,next) => {

  // get token from headers

  const authToken = req.headers.authorization

  // check token exist

  if(!authToken || !authToken.startsWith('Bearer ')){
    return res.status(401).json({success:false,message:"No token,authorizatiob denied"})
  }

  try{
  
     const token = authToken.split(' ')[1];
// verify token
  const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
   
  req.userId = decoded.id
  req.role = decoded.role
    next(); // must be call the nect function
  }catch(err){
       if(err.name ==='TokenExpiredError'){
        return res.status(401).json({message:'Token is expired'});
       }
       return res.status(401).json({success:false,message:'Invalid Token'});
  }

};


export const restrict = roles=> async(req,res,next) => {
    const userId = req.userId
    let user;

    const mentee = await User.findById(userId)
    const mentor = await Professor.findById(userId)


    if(mentee){
        user = mentee
    }

    if(mentor){
        user = mentor
    }

    if(!roles.includes(user.role)){
         return res
         .status(401)
         .json({success:false,message:"You are not authorized"});
    }
    next();

}