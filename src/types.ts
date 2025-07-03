import { Types } from "mongoose";

export interface StudentTypes {
    _id?:Types.ObjectId
    name:string;
    age:number;
    course: "Bcom" | "BBA" | "BCA" | "Bsc";
    phone:number
}

export interface Status {
    message:string;
    success:boolean;
    StatusCode:number;
    data?:StudentTypes[]
}