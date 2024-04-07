console.log("1");
console.log("2");
setTimeout(() => {
    console.log("3");

},0)
console.log("4");
setImmediate(() => {
    console.log("5");

})
console.log("6");



