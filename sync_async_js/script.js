function waitAsec(){
    let t1 = new Date().getTime();
    while(new Date().getTime() < t1 + 1000){

    }
}

console.log("hello");

function waitNsec(n){
       for (let index = 0; index < n; index++) {
           waitAsec();        
       }
    }

waitNsec(19);

console.log("world");
