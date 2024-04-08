//1.install express
//2. import/require

const express = require("express")

// let data = [1,2,3,4,5] 
//data to use in the server
let products = [
    {id:1, name:"p1", price:200},
    {id:2, name:"p2", price:300},
    {id:3, name:"p3", price:400},
    {id:4, name:"p4", price:500},
    {id:5, name:"p5", price:500},
    {id:6, name:"p4", price:500}
]
const app = express() //create server instance like createserver in nodejs
app.use(express.json()) // middleware to help express understand body - POST

//REST Methods:
//GET
app.get("/", (req, res) => {
    // res.write(JSON.stringify(data));
    // res.end();
    //express has simplified the write, converting into string and ending the res by using send
    res.send(products)
});

//path params
//http://localhost:8000/1
app.get("/:id" , (req, res) => {
    let id = req.params.id;
    let product = products.find(p => p.id = id)
    res.send(product);

});

//query params //comment down the first get to run this
//http://localhost:8000?price=200
// app.get("/", (req, res) => {
//     const{price} = req.query;
//     let result = products.filter((p) => {
//         if(price){
//             return p.price === parseInt(price);
//         }
//         return true;
//     });
//     res.send(result);
// })

//POST
app.post("/", (req, res) => {
    let body = req.body;
    let newId = products.length +1
    let newProduct = {
        id:newId,
        ...body,
    };
    products.push(newProduct);
    res.send(newProduct);
    console.log(body) // this will give undefined. for this we need a middleware
})


//starting the server
app.listen(8000, () => {
    console.log("I am Listening")
})