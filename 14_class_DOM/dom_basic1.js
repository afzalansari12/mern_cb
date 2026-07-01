// document object model (DOM)
// it allows to change/ modify the html and css  by javascript
// let h = document.getElementById('heading');
// console.log(h);

var movie = document.getElementsByClassName("movies");
console.log(movie);

let h1 = document.querySelector('#heading');
console.log(h1);

var h2 = document.querySelectorAll('.movies');
console.log(h2);

var h = ducument.querySelector('.movies');
console.log(h.innerText);
console.log(h.innerHTML);
