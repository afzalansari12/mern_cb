const fs = require("fs").promises;


const { fsyncSync } = require("fs");
const path = require('path');
const { json } = require("stream/consumers");

class todos{

 static addtask(name){

    let filepath = path.join(__dirname, "todos.json");
     // read file
     fs.readFile(filepath, "utf-8")
     .then(data => {
        console.log(data);
         data = JSON.parse(data);
         data.push(name);
 
         return fs.writeFile(filepath, JSON.stringify(data));
     })
     .then(() => {
         console.log("File written successfully");
     })
     .catch(err => {
         console.log(err);
     });






//     const data = fs.readFileSync(filepath,'utf-8')

//     // ab is data vale array ke andar newdata add krna hai

//      data =JSON.parse(data);
//     console.log(data);
//     data.push(name);

//    fsp.writeFile(filepath,JSON.stringify(data)).then(()=>{
//       console.log("task added successfully");
//    }).catch(err=>{
//      throw new Error("error while adding new task");
//    })
    // fs.writeFile(filepath,name).then(()=>{
    // console.log("done writing file")
    // }).catch(err=>{
    //     console.log(err);
    // })

    
 }
 static deletetask(name){
    let filepath = path.join(__dirname, "todos.json");
    fs.readFile(filepath, "utf-8")
    .then(data => {

        data = JSON.parse(data);
        data = data.filter(d => d != name);
   

        return fs.writeFile(filepath, JSON.stringify(data));
    })
    .then(() => {
        console.log("File delete successfully");
    })
    .catch(err => {
        console.log(err);
    });

}
 static updatetask(){
   
 }

 static getAlltask(){


    let filepath = path.join(__dirname, "todos.json");

    fs.readFile(filepath, "utf-8")
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(err => {
            console.log(err);
        });

    // let filepath = path.join(__dirname, "todos.json");
    // let data = fsSync.readfileSync(filepath,'utf-8');
    // return JSON.parse(data);
 }


}

 todos.addtask("cricket");
 todos.addtask("hockey");
//  todos.addtask("coding");
//  todos.getAlltask("cricket");


//  todos.updatetask("cricket","mens cricket");
//  todos.updatetask("hockey","mens hockey");

// console.log(todos.getAlltask());