// console.log("hello World")


////........... File Based

// const a = 400;

// console.log(a);

// const a = {
//     average: (a,b)=>{
//         console.log((a+b)/2);

//     },
//     percent: (a,b)=>{
//         console.log((a/b)*100);
//     },
// };

// module.exports = a;


////.........Build In

// const fs = require("fs");

// console.log(fs);

// fs.readFile("./sample.txt", "utf-8", (err, data)=>{
//     if(err) {

//         throw err;

//     }
//     console.log(data);
// });

//Asynchronize

//Let's do synchronize

// const a = fs.readFileSync("./sample.txt", "utf-8");

// console.log(a);
// console.log("Hello");

//.........path

// const path = require("path")

// const a = path.extname("/node/index.js");

// console.log(a);


///......os

// const os = require("os");

// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.totalmem());


// const pokemon = require("pokemon");

// console.log(pokemon.random());


///...........Server create

// import dotenv from "dotenv";

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostname = "localhost";

const home = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {

    if(req.url==="/"){
        return res.end(home);
    }
    if(req.url==="/about"){
        return res.end("<h1>About Page</h1>");
    }
    if(req.url==="/service"){
        return res.end("<h1>Service Page</h1>");
    }
    if(req.url==="/contact"){
        return res.end("<h1>contact Page</h1>");
    }
    else{
        return res.end("<h1>404 Page Not Found</h1>");
    }

});

// dotenv.config({
//     path: "./config.env",
//   });
  

server.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`);

    // server.listen(process.env,PORT,()=>{
    //     console.log(`Server is working on ${process.env.PORT}`);

});
