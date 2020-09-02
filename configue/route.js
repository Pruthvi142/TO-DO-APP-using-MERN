const express=require('express')
const router=express.Router()
const authenticateUser=require('../app/middlewares/authenticate')
const userCltr=require('../app/controllers/usersCltrs')
const taskCltr=require('../app/controllers/taskscontrollers')
router.post('/users/register',userCltr.register)
router.post('/users/login', userCltr.login)
router.delete('/users/logout', authenticateUser,userCltr.logout)
router.get('/users/account', authenticateUser,userCltr.account)
router.post('/users/task', authenticateUser,taskCltr.create)
router.get('/users/task', authenticateUser,taskCltr.list)
router.get('/users/task/:id', authenticateUser,taskCltr.show)
router.delete('/users/task/:id',authenticateUser,taskCltr.delete)
router.put('/users/task/:id',authenticateUser,taskCltr.update)


module.exports=router