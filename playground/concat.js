const { account } = require("../app/controllers/usersCltrs")

const state=[1,2,3,4]
let a=[2,3,4,5,6]
let b=[10,22,23,4,55]
// console.log("state",{...state})
console.log("state",state.concat(b))
console.log("con",[].concat(a))