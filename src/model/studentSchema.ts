import mongoose from "mongoose";
import type { StudentTypes } from "../types";


const StudentSchema = new mongoose.Schema<StudentTypes>({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  course:{
    type:String,
    enum:[ "Bcom" , "BBA" , "BCA" , "Bsc"],
    required:true
  },
  phone:{
    type:Number,
    required:true
  }
})

const Students = mongoose.model("Students",StudentSchema);

export default Students;