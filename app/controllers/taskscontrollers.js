const Task=require('../models/task')
const task = require('../models/task')
const taskCltr={}
taskCltr.create=(req,res)=>{
  
    const body=req.body
   
    const task=new Task(body)
    task.user = req.user._id  
    console.log("task",req.body) 
    task.save()
       .then((task)=>{
            res.json(task)
       })
       .catch((err)=>{
            res.json(err)
       })



}
taskCltr.show=(req,res)=>
{
    const id=req.params.id
    Task.findOne(id)
     .then((task)=>{
         res.json(task)
     })
     .catch((err)=>{
         res.json(err)
     })
}
taskCltr.list=(req,res)=>{
    Task.find({ user: req.user._id })
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}
taskCltr.delete=(req,res)=>{
    const id=req.params.id
    Task.findByIdAndDelete({user:req.user_id,_id:id})
      .then((task)=>{
           res.json(task)
      })
      .catch((err)=>{
          res.json({})
      })

}
taskCltr.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Task.findOneAndUpdate({user:req.user._id,_id:id},{$set:body},{ new: true, runValidators: true })
    .then((task)=>{
        
         res.json(task)
    })
    .catch((err)=>{
        res.json(err)   
    })

}

taskCltr.status=(req,res)=>{
    const id=req.params.id

    const body=req.body
    console.log("status",body)
    Task.findOneAndUpdate({user:req.user._id,_id:id},{completed:body},{ new: true, runValidators: true })
    .then((task)=>{
        
         res.json(task)
    })
    .catch((err)=>{
        res.json(err)   
    })

}
module.exports=taskCltr