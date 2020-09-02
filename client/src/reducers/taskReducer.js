
const taskReducer=(state=[] ,action)=>{
    switch(state,action.type)
    {
       case 'SET_TASK':{
        return state.concat(action.payload)
       }
     case 'GET_TASK':
            {
                console.log("taskreducer",action.payload)
               return [].concat(action.payload)
   

            }

     case 'EDIT':{
                    return  state.map(ele=>{
                           if(ele._id==action.payload._id)
                           {
                             return   Object.assign({},ele,action.payload)
                           }
                           else
                           {
                             return  Object.assign({},ele)
                           }
                    })

            }

        
    case 'DELETE':{
           return state.filter(ele=>ele._id!=action.payload._id)
                }
      default:{
            return [...state]
       }
    }

}
export default taskReducer
