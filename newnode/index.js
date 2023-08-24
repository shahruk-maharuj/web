const fs = require("fs");

const textIn = fs.readFileSync("./txt/readme.txt", "utf-8");
console.log(textIn);

const textOut = `This is what web know about hey: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut)

console.log('File writen');