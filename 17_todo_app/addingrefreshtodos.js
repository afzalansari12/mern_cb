let input = document.querySelector("input");
let button = document.querySelector("button");
let taskilist = document.querySelector("ul");

let todos = [
    { task: "cricket", id: 1 },
    { task: "hockey", id: 2 }
];

let currentid = todos.length + 1;

class todo {

    static addtask(name, initialloading = false) {

        let li = document.createElement("li");
        li.innerText = name;

        let btn1 = document.createElement("button");
        btn1.innerText = "⬇️";
        btn1.classList.add("decrease-priority");

        let btn2 = document.createElement("button");
        btn2.innerText = "⬆️";
        btn2.classList.add("increase-priority");

        let btn3 = document.createElement("button");
        btn3.innerText = "❌";
        btn3.classList.add("delete-task");

        let btn4 = document.createElement("button");
        btn4.innerText = "📝";
        btn4.classList.add("update-task");

        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        li.appendChild(btn4);

        taskilist.appendChild(li);

        if (!initialloading) {
            todos.push({
                task: name,
                id: currentid++
            });

            console.log(todos);
        }
    }

    static refreshtodos() {

        taskilist.innerHTML = "";

        for (let i = 0; i < todos.length; i++) {
            this.addtask(todos[i].task, true);
        }
    }
}

todo.refreshtodos();

button.addEventListener("click", () => {

    let inputData = input.value.trim();

    if (inputData) {
        todo.addtask(inputData);
    }

    input.value = "";
});

taskilist.addEventListener("click", (ev) => {

    let target = ev.target;

    if (target.classList.contains("delete-task")) {

        let taskname = target.parentElement.firstChild.textContent;

        let idx = -1;

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].task === taskname) {
                idx = i;
                break;
            }
        }

        if (idx !== -1) {
            todos.splice(idx, 1);
        }

        todo.refreshtodos();

        console.log(todos);
    }
});