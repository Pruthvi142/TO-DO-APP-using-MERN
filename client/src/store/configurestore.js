
import { createStore, combineReducers ,applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import taskReducer from '../reducers/taskReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:userReducer,
        tasks:taskReducer
    }),applyMiddleware(thunk))
    return store
}
export  default configureStore