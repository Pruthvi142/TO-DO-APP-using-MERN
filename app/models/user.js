const mongoose=require('mongoose')
const { default: validator } = require('validator')
const isEmail=require('validator/lib/isEmail')
const bcrypt=require('bcryptjs')
const Schema=mongoose.Schema
const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        minlength:6,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value)
            {
                return isEmail(value)
            },
            message:function()
            {
                return "invalid email or password"
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:120
    },
   
            token:{
                type:String
            },
          
            
})
UserSchema.pre('save',function(next){
    const user=this
    bcrypt.genSalt()
    .then((result)=>{
        // console.log("gen",result)
        bcrypt.hash(user.password,result)
         .then((encrypt)=>{
            //  console.log("encrypted",encrypt)
             user.password=encrypt
             next()
            //  console.log("user",user.password)
         })
    })
  

})

module.exports=mongoose.model('User',UserSchema)