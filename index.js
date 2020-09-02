const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const configureDb=require('./configue/database')
const router=require('./configue/route')
app.use(express.json())
app.use(router)

const port =3434
configureDb()
app.listen(port ,()=>{
  console.log( "server running on",port)
})