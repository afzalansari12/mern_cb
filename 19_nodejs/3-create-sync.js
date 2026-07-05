const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname,'song.txt');

fs.writeFileSync(fileName,'mera sync data');

console.log("i am another simple print statement")