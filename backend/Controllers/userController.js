import User from "../Modals/UserSchema.js";
// update user profile
export const updateUser = async(req,res) =>{
    const id = req.params.id;

   try{
 
        const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
         
        res
        .status(200)
        .json({sucess:true ,message:'Successfully updated',data:updatedUser})

    
    }
    catch(err){
        res.status(500).json({sucess:false ,message:'Failed to update'})
    }
};

// delete user
export const deleteUser = async(req,res) =>{
    const id = req.params.id;

   try{
 
   await User.findByIdAndDelete(id);
         
        res
        .status(200)
        .json({
            sucess:true ,
            message:'Successfully deleted'
    });

    
    }
    catch(err){
        res
        .status(500)
        .json({sucess:false ,message:'Failed to delete'})
    }
};

// get single user throughh id

export const getSingleUser = async(req,res) =>{
    const id = req.params.id;

   try{
 
        const user = await User.findById(id).select("-password");
         
        res
        .status(200)
        .json({sucess:true ,
            message:'User found',
            data:user,
        });


    
    }
    catch(err){
        res
        .status(404)
        .json({
            sucess:false ,
            message:'No user found'
        })
    }
};


// get all user

export const getAllUser = async(req,res) =>{
   

   try{
  // passing an ampty object so that alll user will be found that are present in that collection
        const users = await User.find({}).select("-password");
        // we have done .select("-password") so that we can remove pasword before sending data
         
        res
        .status(200)
        .json({sucess:true ,
            message:'Users found',
            data:users,
        });


    
    }
    catch(err){
        res
        .status(404)
        .json({
            sucess:false ,
            message:'Users not found'
        })
    }
};
