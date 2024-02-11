import express  from "express";

import authRoutes from './routes/auth.route.js';

const app = express();


app.get("/",(req, res) => {
    res.send({message:"server is fetching data"});
})

app.use("/api/auth",authRoutes);

app.listen(5000,()=>{
    console.log(new Date(Date.now()).toLocaleString().split(',')[1] + " || server is running on port 5000");
})