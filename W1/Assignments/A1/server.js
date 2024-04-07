// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readdir(__dirname, (err, files) => {
//             if (err) {
//                 return res.end('Error in reading the directory');
//             }
//             const fileList = files.join('\n');
//             res.setHeader('Content-Type', 'text/plain');
//             res.end(fileList);
//         });


//     } else if (req.url === "/public") {
//         const filePath = path.join(__dirname, req.url);
//         fs.readdir(filePath, (err, files) => {
//             if (err) {
//                 return res.end('Error in reading the directory');
//             }
//             const fileList = files.join('\n');
//             res.setHeader('Content-Type', 'text/plain');
//             res.end(fileList);
//         });


//     } else {
//         res.end("404 Not Found");
//     }
// });

// server.listen(3000);


const http = require("http");
const fs = require("fs");
// const path = require("path");

const server = http.createServer((req, res) => {
    const url = req.url
    // console.log(url)
    // res.write(url)

    const start = `<html><head></head><body><h1>${url}</h1>`;

    if(url !== "/favicon.ico"){
        let filesName = fs.readdirSync(`${__dirname + url}`);

        let body = `<div>`;
        filesName.forEach(files => {
            const fileLinks = `<div><a href = ${url}${url !== "/" ? "/"+ files : files}> ${files} </a>`;
            body += fileLinks;
        });
        const end = `</div></body></html>`;
        res.write(start + body + end);
    }
    

    res.end();
})

server.listen(4000);

