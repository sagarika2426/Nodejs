const express = require("express");
const Blog = require("../schema/blog.schema");


const BlogRoute = express.Router();


BlogRoute.get("/", async (req,res)=> {
    let blog  = await Blog.find().populate("author",{
        full_name: 1
    });
    res.send(blog)

})

BlogRoute.get("/:id", async (req,res)=> {
    let blog = await Blog.findById(req.params.id)
    res.send(blog);
})


BlogRoute.post("/", async (req,res)=> {
     let blog = new Blog(req.body)
     await blog.save()
    res.send(blog);
})

BlogRoute.delete("/:id", async (req,res)=> {

    try{
        await Blog.findOne({_id: req.params.id})
        res.send("Deleted Successfully")
    }
    catch(e){
        res.send(401).send(e.message)
    }
     
})




module.exports = BlogRoute
