let arr = [1,2,3,4,5]

Array.prototype.myFilter=function(cb){
     let originalarr = this;
     let x =[];
     for (let i = 0; i < originalarr.length; i++) {
        let newval = cb(originalarr[i], i, originalarr);
        if(newval) x.push(originalarr[i]);

     }
     return x;
}


let newArr = arr.myFilter((data,index,arr)=>{
   if(data%2){
      return true;
   }else{
      return false;
   }
})
/// polyfill is the internal function whcih is not present and we make it and work same .


// let newArr = arr.filter((data,index,arr)=>{
//      if(data%2){
//         return true;
//      }else{
//         return false;
//      }
// })

console.log(newArr);
// it give small size of array as compare to original because it use filter.


