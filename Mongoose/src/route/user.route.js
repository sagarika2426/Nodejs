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
    // let user = await TestUser.create(req.body)

     //create and save
     let user = new TestUser(req.body)
     await user.save()
    res.send(user);
})

UserRoute.delete("/:id", async (req,res)=> {
    //deleteOne
    //findByIdAndDelete

    try{
        await TestUser.findOne({_id: req.params.id})
        res.send("Deleted Successfully")
    }
    catch(e){
        res.send(401).send(e.message)
    }
     
})




module.exports = UserRoute
