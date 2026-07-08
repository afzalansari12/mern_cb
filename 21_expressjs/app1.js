const express = require('express');

const app = express();
const path = require('path'); // provided by node js by default
// app.get("/", (req, res) => {
//     res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1 style= 'background-color:black;color :white;' > hello world</h1>
//     <p style= 'background-color:rgb(186, 141, 27);color :white;'>
//         welcome to my app, i am a para
//     </p>
// </body>

// </html>`);
// this is not going to work because we dont recommend to change html here so we use sendfile to give the html file link
// });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/script.js", (req, res) => {
    res.sendFile(path.join(__dirname, "script.js"));
});

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"));
});
app.listen(4444,()=>{
    console.log("htttp://localhost:4444");
})
