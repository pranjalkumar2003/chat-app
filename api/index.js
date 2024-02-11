import express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.get("/",(req, res) => {
    res.send({message:"server is fetching data"});
})


app.listen(5000,()=>{
    connectToMongoDB();
    console.log(new Date(Date.now()).toLocaleString().split(',')[1] + " || Server is running on port 5000 !!");
});