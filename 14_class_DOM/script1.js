// modifying css by DOM

// let movies = document.querySelectorAll((".movies"));
// for( let i = 0; i < movies.length;i++){
//     let movie = movies[i];
//     movie.style.color = "orange";
//     movie.style.backgroundColor = "black";

// }

// single element selector 

// document.querySelector("body").style.backgroundColor="black";
// document.querySelector("body").style.color="white";
// let movie = document.querySelector(".mymovie");

// movie.classList.add("movie");

// setInterval(() => {
//     document.body.classList.toggle("mymovie");
// }, 200);

// way to html element using js
// let li = document.createElement('li');
// console.log(li);
// li.innerText ='avatar';

// to add an item on html page we use append child function
// let li = document.createElement('li');
// movie.List.apppendChild(li);



let movieList = document.querySelector(".movies");

let arr = ["avatar ", "game", "fun", "lost"];

for (let e of arr) {
    let li = document.createElement("li");
    li.innerText = e;
    li.classList.add("movie");

    movieList.appendChild(li);
}


setTimeout(()=>{
    // movieList.innerHTML+= `<li class="movie">coding</li>`;
    let li = document.createElement("li");
    li.innerText = 'coding';
    li.classList.add("movie");

    movieList.appendChild(li);
},1000);