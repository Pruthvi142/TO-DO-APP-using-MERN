import axios from 'axios'

export const setUser=(data)=>{
    // console.log("setUser",data)
    return {type:'SET_USERS',payload:data}

}
export const startUserRegister=( formData,redirect)=>{
    // console.log("action form",formData)
    return (dispatch)=>{
        axios.post('http://localhost:3434/users/register',formData)
        .then((response)=>{
          
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.errors)
            }
            else{
                alert("succesfully registered")
                redirect()
            }
           
        })
        .catch((err)=>{
            
        })

    }
   

}
export const startUsersLogin=(formdata,redirect)=>
{
      return(dispatch)=>{
          axios.post('http://localhost:3434/users/login',formdata)
          
          .then((response)=>{
               if(response.data.hasOwnProperty('errors'))
               {
                   alert(response.data)
               }
               else{
                console.log("token", response.data)
                   alert("login succesfully")
                 
                   localStorage.setItem('authToken',response.data.token)
                   axios.get('http://localhost:3434/users/account',{headers:{'Authorization':localStorage.getItem('authToken')}})
                   .then((response)=>{
                    console.log("server res",response.data)
                       const user=response.data
                     
                       dispatch(setUser(user))
                   })
                   .catch((err)=>{
                       console.log(err)
                   })
                   window.location.href='/tasklist'
               }
          })
          .catch((err)=>{
              console.log(err)
       
          })
        console.log("action log",formdata)
      }
}
export const startGetUser=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3434/users/account',{headers:{'Authorization':localStorage.getItem('authToken')}})
        .then((response)=>{
            const users=response.data
            // console.log( "login",users)
            dispatch(setUser(users))
        })  
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const userLogout=()=>{
    return(dispatch)=>{
        axios.delete('http://localhost:3434/users/logout',{headers:{'Authorization':localStorage.getItem('authToken')}})

        .then((response)=>{
            if(response.data.notice)
            {
                // console.log(response.data.notice)
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href="/users/login"
            }
        })
    }

}