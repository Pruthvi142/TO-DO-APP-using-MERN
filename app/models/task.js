const mongoose=require('mongoose')
const Schema =mongoose.Schema
const TaskSchema=new Schema({
    title:{
        type:String,
          required:[true, "this filed cant be empty"]
    },
    description:{
         type:String
    },
    createdAt:{
        type:Date,
        default:Date.now

    },
    completed: {
        type: Boolean
    },
    dueDate:{
           type:Date,
           validate:{
            validator:function(value){
                return value >this.createdAt
            },
            message:function(){
                return " invalid due date"
            }
        }
            },
    user:{
        type:Schema.Types.ObjectId,
         ref:'User',
       
    }
})
module.exports=mongoose.model('Task',TaskSchema)