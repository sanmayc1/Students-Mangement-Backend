import mongoose from "mongoose";

const connectDb = ()=>{
const url  = `${process.env.DATABASE_URL}`
mongoose
  .connect(url)
  .then(() => console.log("MongoDb Connect"))
  .catch((err) => console.log(err));
}





export default connectDb;

