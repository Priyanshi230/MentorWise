import User from "../Modals/UserSchema.js";
import Professor from "../Modals/ProfessorSchema.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user => {
    return jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET_KEY,
        {
        expiresIn: "15d", 
    }
    ); 
};
export const register = async(req,res) =>{
    const {email,password,name,role,photo,gender} = req.body;
    
     try{
        let user = null;


        if(role == 'mentee'){
         user =   await User.findOne({email})
        }
        else if(role == 'mentor'){
            user = await Professor.findOne({email})
        } 
        if(user){
         return res.status(400).json({message:'User already exist'});
        }


        // hashpassword
       
         const salt = await bcrypt.genSalt(10);  
         const hashPassword = await bcrypt.hash(password,salt); 

         if(role == "mentee"){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            });
        }
        
            if(role == "mentor"){
                user = new Professor({
                    name,
                    email,
                    password:hashPassword,
                    photo,
                    gender,
                    role
                });
        
         }

         await user.save();
         res
         .status(200)
         .json({success: true, message:"User successfully created"});


        

    } catch(err){
       res
       .status(500)
       .json({
        success:false,
        message:"Internal server error,Try again",
    });
    }
};


export const login = async(req,res) =>{
   
   const {email} = req.body;
    try{
    
        let user = null;
// searching for the provided email in the collection
        const mentee = await User.findOne({email});
        const mentor = await Professor.findOne({email});

        if(mentee){
            user = mentee
        }

        if(mentor){
            user = mentor
        }

        if(!user){
            return res
            .status(404)
            .json({message:"User not found"});
        }
  // comparing password
        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password
            );
      // console.log(isPasswordMatch);
        if(!isPasswordMatch){
            return res
            .status(400)
            .json({status:false,message: "Invalid Credentails"})
        }

        // if pasword match then a token is genereated for authentication
      
        const token = generateToken(user);
       // console.log(token); 
      // console.log("Sucess")
        const {password, role, appointements, ...rest} = user._doc
       // console.log(user._prof)
       
        return res
        .status(200)
        .json({
            status:true,
            message: "Successfullly Login",
            token,
            data:{ ...rest},
            role,
        });

    
    }catch(err){
  res
  .status(500)
  .json({status:false,message: "Failed to  Login"});

    }
};

