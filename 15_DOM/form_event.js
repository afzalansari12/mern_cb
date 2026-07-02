let yahooform = document.querySelector('#yahooform');

yahooform.addEventListener('submit',(ev)=>{
       ev.preventDefault();  // form ko by default submit hone se rokta hai 
       console.log("form submitted")
       console.log(ev.target.children[0].value)
       window.location = `https://www.yahoo.com/search?p=${ console.log(ev.target.children[0].value)}`

})