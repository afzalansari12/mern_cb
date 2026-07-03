let url = 'https://jsonplaceholder.typicode.com/todos/'
let tasklist = document.querySelector('#tasklist')

let button = document.querySelector('#btn')

function addToTaskList(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        let li = document.createElement('li')
        li.innerText = element.title;
        tasklist.appendChild(li);
    }
}

button.onclick = () => {
    axios.get(url).then(event => {
        let data = event.data;   
        console.log(data);
        addToTaskList(data);

    }).catch(err => {
        console.log(err);
    });
}
