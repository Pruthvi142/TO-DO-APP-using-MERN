import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startUserRegister} from '../actions/userActions'


class Register extends  React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            email:"",
            password:""
        }
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startUserRegister(formData,redirect))
        this.setState({
            username:'',
            email:'',
            password:''
        })

    }
    
    render() {
        return (
            <div className="container">
                <div className="row"> 
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h1 style={{marginTop:"5vh"}}>Register with Us</h1>
                <form onSubmit={this.handlesubmit} style={{marginTop:"10vh"}}>
                   <div className="form-group">
                   <label>UserName</label>
                   <input type="text" className="form-control" name="username" onChange={this.handleChange} required />
                    </div> 
                    <div className="form-group">
                   <label>Email</label>
                   <input type="text" className="form-control" name="email" onChange={this.handleChange} required/>
                    </div> 
                    <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" name="password" onChange={this.handleChange} required/>
                    </div> 
                    <input type="submit" value="submit"/>

                </form>
                </div>
                </div>
            </div>
        )
    }
}
export default connect() (Register)
