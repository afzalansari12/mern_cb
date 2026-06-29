let p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("world")
    }, 3000);
})

let p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("hello")
    }, 3000);
})

Promise.race([p1,p2]).then((data)=> {
    console.log(data)
}) 