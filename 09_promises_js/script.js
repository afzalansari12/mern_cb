
let p = new Promise((resolve,reject)=>{
    let workdone = false;
     setTimeout(() => {
        if(workdone){
            resolve();
        }else{
            reject();
        }
     }, 5000);

});

console.log(".then and .catch define ho rahe hai");

p.then(function fullfiledhandler(){
    console.log("promise poora hogya");

})
 .catch(

    function rejectedhandler(){
        console.log("promise toot gya");
        
    })