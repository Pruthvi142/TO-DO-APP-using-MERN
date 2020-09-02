const jwt=require('jsonwebtoken')
const User = require('../models/user')

const authenticateUser=(req,res,next)=>{
   
    const token=req.headers.authorization
      if(token)
      {
           const formData= jwt.verify(token,'scret@123')
           try
           {
      
                User.findById(formData.id)
                  .then((user)=>{
                    
                       req.user=user
                       next()
                  })
              
           } 
           catch(e)
           {
               console.log(e.message)
               res.status('401').json({ error: e.message })
           }
      }
      else{
        res.status('401').json({error:"token must be provide"})
      }

}
module.exports=authenticateUser