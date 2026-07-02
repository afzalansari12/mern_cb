let input = document.querySelector('#input')
let showkeys = document.querySelector('.showkeys')

input.addEventListener('keypress',(event) => {
    // console.log("key pressed")
    // console.log(ev)
    console.log(event);
    showkeys.innerText+=event.key;

})

