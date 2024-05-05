const express = require("express");
const TestUser = require("../schema/user.schema");


const UserRoute = express.Router();


UserRoute.get("/", async (req,res)=> {
    // const temp = new TestUser({
    //     full_name: "Test ABC",
    //     gender: "Male",
    //     age: 22,
    // });
    // await temp.save();
    let users  = await TestUser.find({});
    // console.log(users);
    res.send(users)

})

UserRoute.get("/:id", async (req,res)=> {
    // let user = await TestUser.findOne({_id: req.params.id});
    let user = await TestUser.findById(req.params.id) //two ways to find by id
    res.send(user);
})


UserRoute.post("/", async (req,res)=> {
    //insertOne
    //create and save
    let user = await TestUser.create(req.body)
    res.send(user);
})

module.exports = UserRoute
