let input = document.querySelector('input')
let button = document.querySelector('button')
// task list ko select krenge 
let taskilist = document.querySelector('ul')

function addTaskToList(name){
    let li = document.createElement('li');

    // add input to li item
    li.innerText = name;

    // create 4 button up ,down, cancel ,update.
     

    let btn1 = document.createElement('button')
    btn1.innerText='⬇️';
    btn.classList.add('decrease-priority')

    let btn2= document.createElement('button')
    btn2.innerText='⬆️';
    btn.classList.add('increase-priority')

    let btn3 = document.createElement('button')
    btn3.innerText='❌';
    btn.classList.add('delete-task')

    let btn4 = document.createElement('button')
    btn4.innerText='📝';
    btn.classList.add('update-task')
    //append all buttons as children  of li

    li.appendChild(btn1);
    li.appendChild(btn2);

    li.appendChild(btn3);
    li.appendChild(btn4);

    // append this li to tasklist

  taskilist.appendChild(li);
}

let todos = [{task:'cricket', id:1},{task:'hockey', id:2}];
let currentid = todos.length +1;
class todo{
static addtask(name){
    let li = document.createElement('li');

    // add input to li item
    li.innerText = name;
    let currentid = 1;

    // create 4 button up ,down, cancel ,update.
     

    let btn1 = document.createElement('button')
    btn1.innerText='⬇️';
    btn.classList.add('decrease-priority')

    let btn2= document.createElement('button')
    btn2.innerText='⬆️';
    btn.classList.add('increase-priority')

    let btn3 = document.createElement('button')
    btn3.innerText='❌';
    btn.classList.add('delete-task')

    let btn4 = document.createElement('button')
    btn4.innerText='📝';
    btn.classList.add('update-task')
    //append all buttons as children  of li

    li.appendChild(btn1);
    li.appendChild(btn2);

    li.appendChild(btn3);
    li.appendChild(btn4);
    todos.push({
        task : name,
        id : currentid++
    })

    // append this li to tasklist

  taskilist.appendChild(li);
}

static refreshtodos(){
    
}

}


button.addEventListener('click',(ev)=>{
    // trim aage piche k space hata dega
    let inputData = input.value.trim()
    input.value="";
    if(inputData){
        // addTaskToList(inputData);
        todo.addtask(inputData);
    
    }
})
     
       
