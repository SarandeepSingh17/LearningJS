const {readFile, writeFile} = require('fs')
const util = require('util');
console.log("Starting First Task");

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        
readFile(path,'utf-8',(err,data)=>{
    if(err)
    {
        reject(err);
    }
    else{
        resolve(data)
    }
})
    })
}

// getText('../content/first.txt').then((result) => console.log(result)).catch((err)=>console.log(err))


const start = async() =>{
    
    try{
        const first = await getText('../content/first.txt')
    console.log(first)
    const second = await getText('../content/second.txt')
    console.log(second)
}
    catch(err)
    {
        console.log(err);
    }
}
start()

console.log("Starting New Task");


