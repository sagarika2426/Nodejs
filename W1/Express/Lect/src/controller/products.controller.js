const express = require("express")
const route = express.Router();

const fs = require("fs");
// const { parse } = require("path");

const productsString = fs.readFileSync(`${__dirname}/../products.json`, {
    encoding: "utf-8"
});
//This line reads the contents of the file named products.json synchronously using readFileSync method of the fs module.
// stores the content in the productsString variable.

// let data = [1,2,3,4,5] 
//data to use in the server
let products = JSON.parse(productsString)

//REST Methods:
//GET
route.get("/", (req, res) => {
    // res.write(JSON.stringify(data));
    // res.end();
    //express has simplified the write, converting into string and ending the res by using send
    res.send(products)
});

//path params
//http://localhost:8000/1
route.get("/:id" , (req, res) => {
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
route.post("/", (req, res) => {
    let body = req.body;
    let newId = products.length +1
    let newProduct = {
        id:newId,
        ...body,
    };
    products.push(newProduct);

    fs.writeFileSync(`${__dirname}/../products.json`, JSON.stringify(products),{
        encoding:"utf-8"
    }) //writes the updated products array into products.json
    res.send(newProduct);
    console.log(body) // this will g ive undefined. for this we need a middleware
})


//DELETE
route.delete("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let updatedProducts = products.filter((p) => p.id != id);
    if(updatedProducts.length === products.length){
        res.sendStatus(404).send("Not Found")
    }
    fs.writeFileSync(`${__dirname}/../products.json`, JSON.stringify(updatedProducts),{
        encoding:"utf-8"
    });
    res.sendStatus(202).send(1);


})

//PUT
//PATCH
 

module.exports = route;