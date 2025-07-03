import express from 'express'
import adminService from '../controller/adminController'
const adminRouter = express.Router()

adminRouter.get('/students',(req,res)=>adminService.getStudents(req,res))
adminRouter.post('/student',(req,res)=>adminService.createStudent(req,res))
adminRouter.delete('/student/:id',(req,res)=>adminService.deleteStudent(req,res))
adminRouter.patch('/student',(req,res)=>adminService.updateStudent(req,res))



export default adminRouter