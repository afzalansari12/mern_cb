const express  = require('express');
const app = express();
const PORT = 4444;

app.get("/", (req, res) => {
    res.send("Hello World");
});

// query
// url : http://localhost:4444/greet?name=afzal
app.get("/greet", (req, res) => {
    const name = req.query.name;
    res.send(`welcome to the app,${name}`);
});
//params
// url:http://localhost:4444/greet/kartik
app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    /*
    req.params={
    name:'afzal
    }
    */
    res.send(`welcome to the app,${name}`);
});

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})