//1.install express
//2. import/require

const express = require("express")
const userController = require("./controller/users.controller")
const ProductsController = require("./controller/products.controller")

const app = express() //create server instance like createserver in nodejs
app.use(express.json()) // middleware to help express understand body - POST

app.use("/users", userController)
app.use("/products", ProductsController )


//starting the server
app.listen(8000, () => {
    console.log("I am Listening")
})