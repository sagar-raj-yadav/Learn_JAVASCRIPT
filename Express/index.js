import express from 'express';

const app=express();
const PORT=3000;


app.use("/",(req,res)=>{
    return res.status(200).json("hello");
})

app.listen(PORT,()=>{
console.log("hello 3000")
})