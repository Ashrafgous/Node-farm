const fs = require("fs");
const http = require('http');

////////////////////////
//Files

// Blocking Syncronous Way  ----------------------------

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/Output.txt", textOut);
// console.log("File written")

// Non-blockinasynchronous Way -------------------------

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error Occured");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your File Has Been Written ");
//       });
//     });
//   });
// });
// console.log("Will Read a File");

///////////////////////////////////////
// Server

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, '127.0.0.1', ()=> {
  console.log("Listening to request on port 8000")
});