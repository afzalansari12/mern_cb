const express = require('express');
const app = express();
const path = require('path'); 
const PORT = 4444;

//middleware : built-in middleware
// by default this will work for '/
 //request and it will load index.html
 // on the browser // app.use(express.static(path.join(__dirname,'public')));

// generic middleware
 app.use(function(req, res,next){
    console.log("running middleware-1");
    next(); //to go ahead and move towards the next function we call this
 });



// path start match 
// will run for: /greet,/greet/hello,/greet/abc/def/..../xyz
// wll not run for: /greethello,/greet-hello

app.use(function(req, res,next){
    res.send(" running middleware 3");
    next();

});

app.get("/", (req, res) => {
    res.send("hello world");
});



app.get("/greet", (req, res) => {
    res.send("welcome");
});

app.listen(PORT,()=>{
    console.log("htttp://localhost:"+PORT);
})