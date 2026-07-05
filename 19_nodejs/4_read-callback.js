const  fs = require('fs');//ye node js k sath by default hota hai
const  path = require('path');// to joinss the path correctly

// let filename = __dirname+'/'+ 'Songt.txt' ;
let filename = path.join(__dirname, 'Songt.txt') ;

// fs.readFile(filename,(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());// string data
//     console.log(data);// binary data 

// })

 fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
        if(err) throw err;
        console.log(data.toString());// string data
        console.log(data);// binary data 
    
    })