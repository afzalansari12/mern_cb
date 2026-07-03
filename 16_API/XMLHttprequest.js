// let url = 'https://jsonplaceholder.typicode.com/todos/'
// let tasklist = document.querySelector('#tasklist')

// let button = document.querySelector('#btn')
// function addToTaskList(data){
//     for (let i = 0; i < data.length; i++) {
//         const element = data[i];
//         // console.log(element.title);

//         let li = document.createElement('li')
//         li.innerText = element.title;
//          tasklist.appendChild(li);
//      }
// }

// let xml = new XMLHttpRequest();
// xml.open("get",url);
// button.onclick = ()=>{
//    xml.send();
//  }
// // JSON javascript object notation
//  xml.onload = (event) => {
//     console.log(typeof event)
//     let data = JSON.parse(event.currentTarget.response);
//     console.log(typeof data)

//     console.log(data);
//     addToTaskList(data);
// };
//  xml.onerror =(errorMsg)=>{
//     console.log(errorMsg)
// }

let person={
    name:'afzal',
    course: 'btech',
    branch: 'CSE',
    age:20,
    subject:['cpp','web','react']
}
console.log(JSON.stringify(person));
//to convert the js to json we use stringify json is a object notation of js which give object in string 

// console.log(person)

let data =JSON.stringify(person);

console.log(JSON.parse(data))
// similarly to conver json to js we use parse .
