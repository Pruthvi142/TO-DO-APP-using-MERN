import React from 'react'
import {connect} from 'react-redux'
import{startUsersLogin} from '../actions/userActions'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })

        }
        handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                email:this.state.email,
                password:this.state.password
            }
            const redirect=()=>{
               return  this.props.history.push("/")
            }
           this.props.dispatch(startUsersLogin(formData),redirect)

            
        }
        
    
    render()
    {
        return(
            <div className="container">
                  <div className="row">
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-4">
                  <form onSubmit={this.handleSubmit}style= {{marginTop:"10vh"}}>
                    <div  className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control"  onChange={this.handleChange} required />
        
                    </div>
                    <div  className="form-group">
                    <label>Password</label>
                    <input type="text" name="password"  className="form-control" onChange={this.handleChange} required/>
                    </div>
                    <input type="submit" value="submit" className="bt btn-primary"/>
                    

                </form>
                  </div>
                    
                 
            </div>
                  </div>
                      
                
               
        )
    }
    
}
export default connect()(Login)