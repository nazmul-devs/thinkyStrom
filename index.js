import express from "express";
import userRouter from './Users/user.router.js';
const app = express();
app.use(express.json());



app.use('/users', userRouter)




app.get('/', (req,res)=>{
    res.send("Server on running...")
})

app.listen(5000,()=>{
    console.log("app is running on port 5000");
})