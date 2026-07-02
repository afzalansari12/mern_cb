
h1.addEventListener('mouseleave',() => {
    console.log("mouse left")
})


h1.addEventListener('mouseleave',() => {
    console.log("mouse left")
})


h1.addEventListener('mousedown',() => {
    console.log("mouse pressed")
})

h1.addEventListener('mouseup',(ev) => {
    console.log("mouse pressed and released")
    console.log(ev)
})