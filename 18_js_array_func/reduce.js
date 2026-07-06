let Arr = [1,2,3,4,5]

Array.prototype.myreduce = function(cb ,acc){

    let originalarr = this;

    if(typeof (acc)=='undefined'){
        acc =originalarr[0];
        start_index = 1; // for val we pick from 1st index 
        // we dont acc val provided by the user ,so 0th index to initialvalofAcc bana denge
    }else{
        start_index = 0; // for val we will pick from 0th index , because in this case 
        // we have acc provided by the user , so 0th index se shuru karenge val lena 
    }
     let ans = acc;

    for (let i = start_index; i < originalarr.length; i++) {
     ans = cb(ans,originalarr[i], i, originalarr) ;       
        
    }
   return Ans;
}
 

let newAns = Arr.reduce((acc,val,index ,arr)=>{
    return acc + val;
   
})

console.log(newAns);





// let Ans = Arr.reduce((acc,val,index ,arr)=>{
//     return acc + val;
   
// })







// let Ans1 = Arr.reduce((acc,val,index ,arr)=>{
//     return acc*val;
   
// },1)

// console.log(Ans1);
