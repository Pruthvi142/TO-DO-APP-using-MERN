import React, { Component } from 'react'
import{startAddTask} from '../actions/taskAction'
import{connect} from 'react-redux'


 class TaskForm extends React. Component {

constructor(props) {
    super(props);
    this.state={
          title:"",
          description:"",
          dueDate:""
    }
    
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

handleBack=()=>{
    this.props.history.push('/tasklist')
}
handleSubmit=(e)=>{
   
    const redirect=()=>{
         this.props.history.push('/tasklist')
    }
    e.preventDefault()
    const formData={
        title:this.state.title,
        description:this.state. description,
        dueDate:this.state.dueDate

    }
    console.log("form",formData)
    console.log("id",this.props.user)
    this.props.dispatch(startAddTask(formData,redirect))
    this.setState=({
        title:"",
        description:"",
        dueDate:""
    })
}



    render() {
        return (
            <div>
                <div className="container">
                    <h1>ADD TASK</h1>
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
const mapStateToProps = (state) => {
    return {
        user: state.users,
    
    }
  } 

export default connect(mapStateToProps)(TaskForm)
