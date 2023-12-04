document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;

        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        const deleteButton = listItem.querySelector('.deleteBtn');
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        taskList.appendChild(listItem);
    }
});
