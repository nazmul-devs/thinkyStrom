
import { validatorCheck } from "./Common/validatorCheck.js";
export const allUsers = (req,res)=>{
    res.send("this is all users")
}


// models
export const createUser = (req,res)=>{
    // validator check
    validatorCheck();

// user input
const data = req.body;
console.log(data);

// condition
if(data.age <18){
    throw new Error("Your are not old enought");
}


// response
   res.send("user created")
}


