function hello(name,age){
 console.log(this, `name:${name} and age:${age}`);

}

let obj1 ={a:1}
let obj2 ={b:1}
// call  argument
hello.call(obj1,"kartik",46);
hello.call(obj2,"rahul",56);

console.log('\n');

//apply  pass argument like array

hello.apply(obj1,["kartik",45]);
hello.apply(obj2,["rahul",56] );

//bind 
console.log('\n');
  

 let fun = hello.bind(obj1,"kartik",45);
 let fun1 = hello.bind(obj2,"rahul",56 );

 fun();
 fun1();

console.log('\n');

 let fun2 = hello.bind(obj1,"devansh");
 fun2(20);


 let fun3 = hello.bind(obj2,"ansh");
 fun3(50);