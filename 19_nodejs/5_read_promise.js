const  fs = require('fs');//ye node js k sath by default hota hai
const  path = require('path');// to joinss the path correctly

// let filename = __dirname+'/'+ 'Songt.txt' ;
let filename = path.join(__dirname, 'Song.txt') ;

fs.readFile(filename,{
    encoding : 'utf-8'
}).then(data=>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})