const express = require('express');

const app = express();
const path = require('path'); 

//middleware : built-in middleware
// by default this will work for '/
 //request and it will load index.html
 // on the browser 
app.use(express.static(path.join(__dirname,'public')));

// this app.get will not work if public folder k andar index.html hui toh 

app.get("/", (req, res) => {
    res.send("hii");
});

app.listen(5555,()=>{
    console.log("htttp://localhost:5555");
})
