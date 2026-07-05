const  fs = require('fs');//ye node js k sath by default hota hai
const  path = require('path');// to joinss the path correctly

// let filename = __dirname+'/'+ 'Songt.txt' ;
let filename = path.join(__dirname, 'Song.txt') ;

const data = fs.readFileSync(filename,'utf-8');
console.log(data);
console.log("this is a statement ")