import React from 'react';
import Register from './components/Register'
import task from './components/TaskList'
import Login from './components/Login'
import  home from './components/home'

import TaskForm from './components/TaskForm'
import {BrowserRouter,Link,Route,} from 'react-router-dom'
import{connect} from 'react-redux'
import {userLogout} from './actions/userActions' 
import EditForm from './components/EditForm';



function App (props) {
  console.log( "app ",props.user)
  const handleLogOut=()=>{
 
  
   props.dispatch(userLogout())
  }
  return (
    
     
       <BrowserRouter>
       <div>
       {
         Object.keys(props.user).length!==0 ?(
         <div>
               <nav className="navbar navbar-dark bg-dark">
               <a className="navbar-brand" href="#">TO_DO APP</a>
                 <ul className="nav justify-content-end">
                 <li class="nav-item">
                 <Link to="#" onClick={handleLogOut}> logout</Link> 
              
                </li>
                </ul>
                </nav>
                </div>):
             
                 (<div>
                   <nav className="navbar navbar-dark bg-dark">
                   <a className="navbar-brand" href="#">TO_DO APP</a>
                   <ul className="nav nav-pills">
                   <li class="nav-item">
                   <Link to="/" className="nav-link">Home</Link>
                   </li>
                   <li className="nav-item">
                   < Link to ="/users/register"  className="nav-link">Register</ Link>
                     </li>
                   <li className="nav-item">
                  < Link to ="/users/login" className="nav-link" >Login</ Link> 
                 </li>
                   </ul>
                 </nav>
                </div>)

          }       
       
       
       <div className="container">
        <Route path="/" component={home} exact={true}/>
               <Route path="/tasklist" component={task} exact={true}/>
              <Route path="/users/register" component={Register}/>
              <Route path="/users/login" component={Login} exact={true}/>
              <Route path="/addtask" component={TaskForm} exact={true}/>
              <Route path="/editTask/:id" component={EditForm} exact={true}/>
              </div>
       </div>
       </BrowserRouter>

 
   
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.users,
  
  }
}
export default connect(mapStateToProps)(App) 
