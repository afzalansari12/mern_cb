
let numberlist = document.querySelector(".numberlist");


for(let i = 1;i <= 1000; i++){
    let str = '';

    if(i%3==0){
        str += "fizz";
    }

    if(i%5==0){
        str += "buzz";
    }
    // console.log(str == '' ? i : str);
    let x =((str == '' )? i : str);

    // numberlist.innerHTML+=`<li>${x}</li>`

    let li = document.createElement("li");
    li.innerText = x;
    li.classList.add("movie");

    numberlist.appendChild(li);
}



