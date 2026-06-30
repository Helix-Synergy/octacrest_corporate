const express = require("express");
const app=express();
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();
const router=require("./routes/route")
const ConnectionDB=require("./config/db");
ConnectionDB();

// middlewares

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api",router)

// server 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running`);
})