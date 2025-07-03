import express from "express";
import { configDotenv } from "dotenv";
import adminRouter from "./routes/adminRouter";
import cors from "cors"
configDotenv();

import connectDb from "./db/connect";

connectDb();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", adminRouter);

app.listen(process.env.PORT, () => console.log("Sever is running"));
