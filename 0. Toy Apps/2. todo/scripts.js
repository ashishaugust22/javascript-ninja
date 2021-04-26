const todoInput = document.querySelector('#todoInput');
const todoAddButton = document.querySelector('#todoAddButton');
const todoPlaceholder = document.querySelector('#todoPlaceholder');
const localStorageField = 'todos';
const todos = getTodos();

(function init () {
    console.log("Welcome to TODO App");
    bindAddTodo();
    bindDelete();
    renderTodos();
})();;

function getTodos () {
    const savedTodos = localStorage.getItem(localStorageField);
    return savedTodos ? JSON.parse(savedTodos) : [];
}

function bindAddTodo () {
    todoAddButton.addEventListener('click', onAddTodo);
}

function bindDelete () {
    todoAddButton.addEventListener('click', onAddTodo);
}

function bindClearAll () {
    todoAddButton.addEventListener('click', onAddTodo);
}

function onAddTodo () {
    const newTodo = todoInput.value;
    if (newTodo) {
        todos.push(newTodo);
        saveTodos();
        renderTodos();
    }
}


function renderTodos () {
    todoPlaceholder.innerHTML = '';
    todos.forEach(todo => {
        todoPlaceholder.appendChild(getTodoNode(todo));
    });
}

function saveTodos () {
    localStorage.setItem(localStorageField, JSON.stringify(todos));
}

function getTodoNode (todo) {
    const todoNode = document.createElement('div');
    todoNode.classList.add('todoItem');
    todoNode.innerHTML = todo;
    return todoNode;
}

function clearAllTodos () {
    localStorage.setItem(localStorageField, '[]');
}
