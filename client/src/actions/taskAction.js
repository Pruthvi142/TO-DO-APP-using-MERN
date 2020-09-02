import Axios from "axios"




export const SetTask=(data)=>{
    return{type:'SET_TASK',payload:data}
}

export const AddTask=(data)=>{
    console.log("action task",data);

    return {type:'GET_TASK',payload:data}
}

export const DeleteTask=(data)=>{
    return {type:'DELETE',payload:data}
}

export const EditTask=(data)=>{
    return{type:"EDIT",payload:data}
}


export const startAddTask=(formdata,redirect )=>{
    // console.log("action  taskform", formdata)
    return(dispatch)=>{
        Axios.post('http://localhost:3434/users/task',formdata ,{headers:{'Authorization':localStorage.getItem('authToken')}})
        .then((response)=>{
            // console.log(response.data)
            const data=response.data
             dispatch(SetTask(data))
            redirect()
            

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startGetTask=()=>{
    return(dispatch)=>{
        Axios.get('http://localhost:3434/users/task',{headers:{'Authorization':localStorage.getItem('authToken')}})
        .then((response)=>{
            console.log("user tasks",response.data)
            const data=response.data
            dispatch(AddTask(data))

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
}
export const startDeleteTask=(id)=>{
    return(dispatch)=>{
        Axios.delete(`http://localhost:3434/users/task/${id}`,{headers:{'Authorization':localStorage.getItem('authToken')}})
        .then((response)=>{
            const data=response.data
            dispatch(DeleteTask(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}

export const startEditTask=(id,formdata,redirect)=>{

    return(dispatch)=>{
        Axios.put(`http://localhost:3434/users/task/${id}`, formdata,{headers:{'Authorization':localStorage.getItem('authToken')}})
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
                
            }
            else{
                console.log("Edit res",response.data)
                const cust=response.data
                dispatch(EditTask(cust))
                window.location.href='/tasklist'
            }   
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }
}
