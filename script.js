function addTask() {
    const input = document.getElementById('tf-input').value;
    const task = document.createElement('li');
    task.textContent = input;
    task.id =
        new Date().valueOf().toString() +
        Math.random().toString(36).substring(2, 7);
    task.classList.add('list-item');
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        editTask(task.id);
    };
    task.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => {
        deleteTask(task.id);
    };
    task.appendChild(deleteButton);
    document.getElementById('task-container').appendChild(task);
    document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
}

function editTask(id) {
    const task = document.getElementById(id);

    const buttonContainer = document.querySelector('.input-container button');
    const inputContainer = document.getElementById('tf-input');

    buttonContainer.textContent = 'Edit';
    inputContainer.placeholder = 'Edit a task';

    buttonContainer.onclick = () => {
        task.firstChild.textContent = inputContainer.value;
        buttonContainer.textContent = 'Add Task';
        inputContainer.placeholder = 'Enter a task';
        buttonContainer.onclick = addTask;
        inputContainer.value = '';
    };
}
