const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItem = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addToDoItem);

function addToDoItem(event) {
    event.preventDefault();
    if (addInput.value === '') return alert('Enter the task name');
    
    const todoItem = createToDoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

function createToDoItem(title) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerText = 'Изменить';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Удалить';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    console.log(listItem);
    return listItem;
}