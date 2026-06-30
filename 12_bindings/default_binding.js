
console.log(this);
console.log(global);


function hello(){
    console.log("inside function",this);
}

hello();