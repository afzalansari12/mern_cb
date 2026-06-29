function sortarray1(a){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            a.sort((a,b)=> a-b);
            res(a);
        }, 3000);
    })
}

function sortarray2(a){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            a.sort((a,b)=> a-b);
            res(a);
        }, 1000);
    })
}

let arr1 = [4, 3, 5,8,7];
let arr2 = [3, 6,5,6,0];

Promise.all([sortarray1(arr1),sortarray2(arr2)]).then(data=>{
    let newarr = [...data[0],...data[1]];
    console.log(newarr);
})

