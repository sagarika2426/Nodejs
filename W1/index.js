// console.log("Hello")

const {sum, sub, mul} = require("./math")//type - user generated module
const isEven = require("is-even")//type - npm packages

const os = require("os");//type - core modules
console.log(os.cpus());

// let result = sum (1,4);
console.log("sum", sum(1,4), isEven( sum(1,4)));
console.log("mul", mul(1,4), isEven( mul(1,4)));
console.log("sub", sub(1,4), isEven( sub(1,4)));


