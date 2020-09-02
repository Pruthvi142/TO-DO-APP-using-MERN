import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startEditTask } from '../actions/taskAction'
import moment from 'moment'
 class EditForm extends  React.Component {
   constructor(props) {
       super(props)
       this.state={
        title: this.props.task?.title,
        description:this.props.task?.description,
        dueDate:this.props.task &&  new Date(this.props.task.dueDate)
  }
       
   }
   handleChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
   }

   handleBack=()=>{
       this.props.history.push('/tasklist')
   }
   handleSubmit=(e)=>{

       e.preventDefault()
       const redirect=()=>{
        this.props.history.push('/tasklist')
   }
  
     const formData={
       title:this.state.title,
       description:this.state. description,
       dueDate:this.state.dueDate

     }
     const id=this.props.task._id
     this.props.dispatch(startEditTask(id,formData,redirect))


   }
   

    render() {
           console.log("Edit form",this.props.task)
        return (
            <div>
                 <div className="container">
                    <h1>EDIT TASK</h1>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                           <label>Title</label> 
                           <input type="text" className="form-control"  name="title" value={this.state.title} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                           <label>description</label>
                           <textarea className="form-control"  name="description"  value={this.state.description} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                           <label>dueDate</label>
                           <input type="date"  className="form-control" name="dueDate" value={this.state.dueDate} onChange={this.handleChange}/>
                        </div>

                      
                        <input type="submit" value="submit"/>
                        
                    </form>

                    </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={this.handleBack}>Back</button>
   
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
     const task=state.tasks.find(ele=>ele._id==props.match.params.id)
     console.log("task",task)
     return{
        task:state.tasks.find(ele=>ele._id==props.match.params.id)
     }
   
    
}
export default connect(mapStateToProps)(EditForm)
