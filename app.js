// const person= {
// name: "Saran",
// age: 14,
// isMarried: false
// };
// const {name, age, isMarried} = person;
// const person2 = {...person, name: "angad"};
// let names = ["Saran","Darpan","Ginni"];
// const names2 = [...names,"Jeet"];

// names.map((name)=>{
// return <h1> {name} </h1>
// });

// names.filter((name)=>{
//     console.log(name);
// });

// const event = new Promise((resolve, reject)=>{
// var name = "Saran";
// if(name=="pedro")
// {
//     resolve(name);
// }
// else{
//     reject("Name didn't match, name was "+ name);
// }
// });
// event.then((name)=>{
// console.log(name);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Promise finished");
// })
// const axios=require("axios");
// //axios is library to fetch the data
// const fetchData = async ()=>{
//     try{
// const data  = await axios.get("https://cat-fact.herokuapp.com/facts");
// console.log(data);}
// catch(err)
// {
//     console.log(err);
// }finally{
//     console.log("PROMISE FINISHED");
// }
// };
// fetchData();

//Globals - No widnow!!
//  __dirname - path to current Directory
 // __filename - filename
 // require - function to use modules(CommonJS)
 //module - info about current module (file)
 //process - info about env where the program is being executed
// const names = require('./names');
// const utils = require('./utils');
// const express  =require('express')
// const app = express()
// app.use(express.json())
// app.use(require('./routes/productsRoutes.js'))
// app.listen(3000,()=>{console.log("Server Started at Port No: 3000")});
// console.log(utils.addValues(1,15));
// console.log(utils.sayHi("Saran"));
// console.log(names.items);

const path = require('path');
console.log(path.sep)
const filepath = path.join('routes','producrsRoutes.js');
console.log(filepath)
const http = require('http')
const Server = http.createServer((req,res)=>{
    if(req.url ==='/')
    {
        res.end('Welocme to Home page')
    }  
    if(req.url === '/about')
    {
        res.end('This is our about page')
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>We dont have the page you are looking for</p>
        <a href="/">Back Home</a>`
    )
})
Server.listen(5000,()=>{
    console.log("Server started at Port N: 5000")
});