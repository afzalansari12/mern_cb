let Arr = [1,2,3,4,5]

let Ans = Arr.reduce((acc,val,index ,arr)=>{
    return acc + val;
   
})

console.log(Ans);

let Ans1 = Arr.reduce((acc,val,index ,arr)=>{
    return acc*val;
   
},1)

console.log(Ans1);
