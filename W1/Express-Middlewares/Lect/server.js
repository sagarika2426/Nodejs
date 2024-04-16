const express = require("express");
const app = express();

app.use(express.json())//req.body as json for POST, PUT, PATH

//Authentication Middleware
const authMiddleware = (req, res, next) => {
    if(!req.headers["accesstoken"]){
        return res.status(401).send("You are not allowed to access this ")
    }
    next(); //proceed with the next set of operation
    //always should be on last line

}

 app.use(authMiddleware);

//Logger Middleware
const loggerMiddleware = (req, res, next) => {

}


app.get("/", (req, res) => {
    console.log("GET:", req.url);
    res.send("GET / route")
})

app.listen(8000, () => {
    console.log("I am Listening on http://localhost:8000");

});