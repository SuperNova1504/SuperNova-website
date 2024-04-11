const todoList = [{
    name:'make dinner',
    dueTime:'10:00',
    dueDate : '2024-04-06',
    },
    {
    name:'wash dishes',
    dueTime:'11:00',
    dueDate:'2024-04-07'
    }];

renderTodoList();

function renderTodoList(){
    
    let todoListHTML = '';
    for(let i = 0; i< todoList.length; i++){
        const todoObject = todoList[i];
        const {name} = todoObject;
        const {dueTime} = todoObject;
        const {dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueTime}</div>
        <div>${dueDate}</div> <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
            "class="delete-todo-button">Delete</button> 
        `;
        
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const timeInputElement = document.querySelector('.js-due-time');
    const dueTime = timeInputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name:name,
        dueTime:dueTime,
        dueDate: dueDate});

    inputElement.value = [];

    renderTodoList();
}