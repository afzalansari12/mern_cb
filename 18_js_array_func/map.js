// array function map it gives the new array of same size of original array
let Arr = [1,2,3,4,5]
// let newArr = arr.map((data,index,arr)=>{
//     return data * data;
   
// })

// console.log(newArr);


Array.prototype.myMap = function(cb){
    let originalarray = this; // inplicit binding arr.mymap , inside mymap point to arr
    let newArr =[];
    for (let i = 0; i < originalarray.length; i++) {
          let newval = cb(originalarray[i], i, originalarray);
          newArr.push(newval);
    }

    return newArr;
}

let newArr = Arr.myMap((e,i,a)=>{
    return e*e;
})

console.log(newArr);
console.log(Arr);

// aray.prototype is a parent of every array so if we want to make our customize map then we use array.prototype

