const  fs = require('fs');//ye node js k sath by default hota hai
const  path = require('path');// to joinss the path correctly

// let filename = __dirname+'/'+ 'Songt.txt' ;
let filename = path.join(__dirname, 'Songt.txt') ;


fs.writeFile(filename,"hello world",(err)=>{
    if(err)throw err;
    console.log("file written succesfully");
})

console.log("i am another piece of code");