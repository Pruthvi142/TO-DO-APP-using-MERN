import { combineReducers } from "redux"

const userReducer=(state=0,action)=>{
    switch( state,action.type)
    {
        case 'SET_USERS':{
            // console.log("reducers",action.payload)
            return [].concat(action.payload)
        }
       default:{
           return {...state}
       }
    }
}
export default userReducer