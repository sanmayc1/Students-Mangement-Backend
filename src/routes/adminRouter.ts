import express from 'express'
import adminService from '../controller/adminController'
const adminRouter = express.Router()

adminRouter.get('/students',(req,res)=>adminService.getStudents(req,res))



export default adminRouter