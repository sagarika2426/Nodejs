const express = require("express");
const app = express();


app.get("/", (req, res) => {
    console.log("GET /", req.url);
    res.send("GET / route")
})

app.listen(8000, () => {
    console.log("I am Listening on http://localhost:8000");

});