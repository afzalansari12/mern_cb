const fs = require('fs');
const path = require('path');

let filename = path.join(__dirname,'song.txt');

fs.link(filename,(err)=>{
    if(err) throw err;
    console.log('delete teh file');
});

