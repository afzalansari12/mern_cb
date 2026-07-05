const fs = require('fs/promises');
const  path = require('path');// to joinss the path correctly

// let filename = __dirname+'/'+ 'Songt.txt' ;
let filename = path.join(__dirname, 'Songt.txt') ;

fs.writeFile(filename,"hey!",{
    flag:'a'
}).then(()=>{
    console.log("data succesfully written");
}).catch(err=>{
    console.log(err)
})

console.log("hello i m print statement")