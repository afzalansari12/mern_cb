1
// function hello(){
//     console.log(this); //inside the function it is global
//     let innerfun = ()=>{
//         console.log("INNER fun",this);
//     }
        //  arrow function k sath kabhi this ko use nhi karte hai 
//     innerfun();
// }

// let obj = {a :1};

// hello.call(obj);

2

// function hello(){
//     console.log(this);
//     function innerfun  (){
//         console.log("INNER fun",this);
//     }
        //  arrow function k sath kabhi this ko use nhi karte hai 
//     innerfun();
// }

// let obj = {a :1};

// hello.call(obj);

3

// function myhello(){
//     console.log(this.a);
// }

// let obj1 = {a : 1};
// let obj2 = { a: 11};


// myhello.call(obj1);
// myhello.call(obj2);

// bydefault this -> { empty object}
this.a = "meinglobal hu";
let  myhello = ()=>{
    console.log(this.a);
    //here this will point to global , irrespective of  how  we call it in the current  example
}

let obj1 = { a : 1};
let obj2 = { a : 1};

myhello.call(obj1);
myhello.call(obj2);



// console.log(this) : yaha this points krega to module.exports