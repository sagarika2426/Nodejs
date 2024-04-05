const http = require("http");
const fs = require("fs"); //importing file system for html file
const products = require("./products.json") //import json file

//create server 
const server = http.createServer((req, res) => {
    // console.log("Hello")
    // console.log(req.url)
    // res.write("Hello") 

    let message = `Welcome to `;
    //swich act same as if else
    switch(req.url) {
        case "/" : {
            res.setHeader("content-type", "text/html") // type of files which we can provide. If you don't provide anything then it will take everything as a string
            message += "Home";
            res.write(`<h1>${message}</h1>`)
    
        }
    
    
        case "/products" : {
            res.setHeader("content-type", "text/html") // type of files which we can provide. If you don't provide anything then it will take everything as a string
            message += "Products"
            res.write(`<h1>${message}</h1>`)
    
            products.forEach(product => {
                res.write(`<div> 
                <span> ${product.id}</span>
                <span> ${product.Name}</span>
                </div>`)
    
            })
    
        }
        default : {
            let htmlFile = fs.readFileSync(`${__dirname}/404.html`, {
                encoding : "utf-8"
            });
            res.write(htmlFile)
    
        }
    }

    //sending json as response
    // res.write(JSON.stringify({a:1, b:2, c:3}))

    //sending html 
    // res.write("<a>HTML</a>") 


    res.end() 
    // if we dont end the res, the page will keep on loading

});

//start/listen to this server on port
server.listen(4000);

