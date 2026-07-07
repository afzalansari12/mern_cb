const express = require('express');
const app = express();
const PORT = 4444;

// get request  ke badle response bhejne ka code
app.get('/', function(req, res){
    // console.log(res);
    res.send('hello world')
})
app.get('/hello',function(request,response){
    response.send('hello! i am a computer');
})
app.listen(PORT ,()=>{
    console.log("http://localhost:"+PORT);
});