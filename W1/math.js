
const sum = (a,b) => a+b;
//how can we use this sum in the math.js and 
//perform the operation

//we cant do using import export in nodejs
// so we will be using module and require
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;

module.exports = {sum, sub, mul};


