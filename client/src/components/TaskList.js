import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetTask, startDeleteTask, startUpdateStatus} from '../actions/taskAction'
import moment from 'moment'
// import {Link} from 'react-router-dom'
 class Home extends React. Component {
     constructor(props) {
         super(props);
         this.state={
             completed:false
         }
     }
     

  handleChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
  }
  
     handleForm=()=>{
         this.props.history.push('/addtask')
     }
     handleDelete=(id)=>{
        const confirm = window.confirm("Are you sure?") 
        if(confirm)
        {
            this.props.dispatch(startDeleteTask(id))
        }
     }

    
     EditForm=(id)=>{
         this.props.history.push(`/editTask/${id}`)
      }
     componentDidMount(){
        if(this.props.task.length===0)
        {
            this.props.dispatch(startGetTask())  
        }
    }

   
    
    render() {
        console.log("table",this.props.task)
        
        return (
             <div>
                <button type="button" class="btn btn-success" onClick={this.handleForm}>ADD TASK</button>
                 <h1>TASK LIST</h1>


                 <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">DueDate</th>
      <th scope="col"> Edit</th>
      <th scope="col">Delete</th>
  
    </tr>
  </thead>
  <tbody>
    
        {
            this.props.task.map((ele,i)=>{
                return(
                    <tr>

                  
                <td>{i+1}</td>  
                <td>{ele.title}</td>
                <td>{ele.description}</td>
                <td>{moment(ele.dueDate).format('L')}</td>
                <td><button type="button" className="btn btn-primary"onClick={()=>{this.EditForm(ele._id)}} >Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={()=>{this.handleDelete(ele._id)}}>remove</button></td>
              
                </tr>
                )
            })
    
        }         
    
  

  </tbody>
</table>
        
             </div>
        )
          
    }
}
const mapStateToProps=(state)=>{
    return{
        task:state.tasks,
       
    }
   
}
export default connect(mapStateToProps)(Home)
