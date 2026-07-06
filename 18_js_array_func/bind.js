function hello(college ,year){
    console.log(this, college, year);
}

let obj ={
  name :'abc'
}
let obj1 ={
    name :'def'
  }
 Function.prototype.mybind = function(myobj, ...args){
    let fun = this;

/*
myfun = [function:hello]
*/ 
// console.log(args);
 return function(...args1){
//    console.log(args1);

       fun.apply(myobj,[...args,...args1]); // hello function ko call kr diya by setting the `this` inside of `fun` to `hello`
  }

 }

let f = hello.mybind(obj);
   f("ABES",2005);

   /// spread operator ...arr,...arg