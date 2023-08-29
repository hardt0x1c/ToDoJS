const deleteBtn = document.getElementsByClassName('.delete-btn')
const doneBtn = document.getElementById('doneBtn')
const newTask = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.querySelector('#taskList')


taskList.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'delete') {
        const taskBlock = event.target.parentNode
        taskBlock.remove()
    }
})


taskList.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'done') {
        const taskBlock = event.target.parentNode
        if (taskBlock.style.opacity === '0.5') {
            taskBlock.style.opacity = '1'
            taskBlock.style.textDecoration = 'none'
        } else {
            taskBlock.style.opacity = '0.5'
            taskBlock.style.textDecoration = 'line-through'
        }
    }
})


addTaskBtn.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput')
    const taskInputValue = taskInput.value
    taskInput.value = ''
    const taskBlock = document.getElementById('task');
    const newTaskBlock = document.createElement('div');
    newTaskBlock.className = 'col-lg-12 task';

    const taskContent = document.createElement('div');
    taskContent.className = 'task-container';
    taskContent.innerHTML = `<p>${taskInputValue}</p>`;

    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-primary done-btn';
    doneBtn.style.height = '50px';
    doneBtn.textContent = 'Завершено';
    doneBtn.dataset.action = 'done'

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete-btn';
    deleteBtn.style.height = '50px';
    deleteBtn.textContent = 'Удалить';
    deleteBtn.dataset.action = 'delete'

    newTaskBlock.appendChild(taskContent);
    newTaskBlock.appendChild(doneBtn);
    newTaskBlock.appendChild(deleteBtn);

    taskBlock.parentNode.insertBefore(newTaskBlock, taskBlock.nextSibling);
})