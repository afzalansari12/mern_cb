let url = 'https://jsonplaceholder.typicode.com/todos/'
let tasklist = document.querySelector('#tasklist')

fetch(url).
then(data =>{
    return data.json();
}).then(data=>{
    console.log(data)
     for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log(element.title);

        let li = document.createElement('li')
        li.innerText = element.title;
         tasklist.appendChild(li);
     }
}).catch(err=>{
    console.log(err)
})