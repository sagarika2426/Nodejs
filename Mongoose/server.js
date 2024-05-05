//import
//create
//listen

const express = require("express");
const mongoose = require("mongoose"); //import mongoose
const UserRoute = require("./src/route/user.route");
const app = express();

app.use(express.json())
app.use("/users", UserRoute)


//create schema


//connect instead of create and start

app.listen(3000,async ()=>{
    await mongoose.connect("mongodb://localhost:27017/AssignmentUsers")
    console.log(("I am listening"));
})

