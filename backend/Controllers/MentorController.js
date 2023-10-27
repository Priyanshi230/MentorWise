import Professor from "../Modals/ProfessorSchema.js";
// update user profile
export const updateProfessor = async(req,res) =>{
    const id = req.params.id;

   try{
 
        const updatedProfessor = await Professor.findByIdAndUpdate(id,{$set:req.body},{new:true})
         
        res
        .status(200)
        .json({
            sucess:true ,
            message:'Successfully updated',
            data:updatedProfessor});

    
    }
    catch(err){
        res
        .status(500)
        .json({sucess:false ,message:'Failed to update'});
    }
};

// delete Professor
export const deleteProfessor = async(req,res) =>{
    const id = req.params.id;

   try{
 
   await Professor.findByIdAndDelete(id);
         
        res
        .status(200)
        .json({
            success:true ,
            message:'Successfully deleted'
    });

    
    }
    catch(err){
        res
        .status(500)
        .json({sucess:false ,message:'Failed to delete'})
    }
};

// get single Professor throughh id

export const getSingleProfessor = async(req,res) =>{
    const id = req.params.id;

   try{
 
        const professor = await  Professor
        .findById(id)
        .populate('reviews')
        .select("-password");
         
        res
        .status(200)
        .json({sucess:true ,
            message:'Professor found',
            data:professor,
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

export const getAllProfessor = async(req,res) =>{
   

   try{
       // to impliment functionality of ssearch filter
       const {query} = req.query
       let professors;

          if(query){
            professors = await Professor.find({
            isApproved:"approved",
            $or:[
                {name:{$regex:query,$options: 'i'}} ,
                {specialization:{ $regex:query,$options: 'i'}},
         ],
        }).select("-password");
        }
        else{
         //   passing an ampty object so that alll user will be found that are present in that collection
            professors = await Professor.find({isApproved:"approved"})
            .select("-password");
            // we have done .select("-password") so that we can remove pasword before sending data
             
        }

  
        res
        .status(200)
        .json({sucess:true ,
            message:'Professor found',
            data:professors,
        });


    
    }
    catch(err){
        res
        .status(404)
        .json({
            success:false ,
            message:'Professors not found'
        })
    }
};
