let form =document.querySelector('#form')
let platform = document.querySelector('#platform');
let inp = document.querySelector('input');

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    console.log("form submitted")
    console.log(inp.value)
    console.log(platform.value)

    if(platform.value == 'google'){
        window.location = `https://www.google.com/search?q=${inp.value}`
    }else{
        window.location = `https://www.google.com/search?q=${inp.value}`

    }
})