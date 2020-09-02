const User=require('../models/user')
const bcrypt=require('bcryptjs')
const { default: isEmail } = require('validator/lib/isemail')
const jwt=require('jsonwebtoken')
const userCltr={}
userCltr.register=(req,res)=>{
    const body=req.body
    const user=new User(body)
    user.save()
               .then((user)=>{
                   res.json(user)
               })
               .catch((err)=>{
                   res.json(err)
               })
}
userCltr.login=(req,res)=>{
  const body =req.body

  User.findOne({email:body.email})
   .then((user)=>{
       if(user)
       {
          bcrypt.compare(body.password,user.password)
          .then((result)=>{
               if(result)
               {
                     const formData={
                         id:user._id
                        }
                        const token=jwt.sign(formData,'scret@123',{expiresIn:"1d"})
                        // console.log("token",token)
                     
                        res.json({token:token})
               }
               else{
                   res.json({errors:"invalid email or password"})
               }
          })
       }
       else
       {
         res.json("invlid email or password")
       }

   })
   .catch((err)=>{

   })
}
userCltr.account=(req,res)=>{
    
        res.json(req.user)
    
    

}
userCltr.logout =(req, res) =>{
   
    const { userId, token } = req
    User.findByIdAndUpdate(userId, { $pull: { tokens: { token: token } } })
        .then(()=>{
            res.json({ notice: 'successfully logged out' })
        })
        .catch((err)=> {
            res.json(err)
        })
    
  
}
module.exports=userCltr