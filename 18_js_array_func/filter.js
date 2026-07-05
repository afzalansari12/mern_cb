let arr = [1,2,3,4,5]
let newArr = arr.map((data,index,arr)=>{
     if(data%2){
        return true;
     }else{
        return false;
     }
})

console.log(newArr);
// it give small size of array as compare to original because it use filter.