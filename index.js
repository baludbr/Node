const express=require('express')
const dotenv=require('dotenv')
const app=express()
dotenv.config()
app.get("/",(req,res)=>{
    res.send("Hello World!!")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running at Port ${process.env.PORT}`)
})