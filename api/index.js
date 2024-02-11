const express = require("express");

const app = express();

app.listen(5000,()=>{
    console.log({message:"server is running on port 5000"});
})