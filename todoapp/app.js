let tasks = [];

document.getElementById('add-task').addEventListener('click', function () {
    var description = document.getElementById('input-description').value;
    
    tasks.push(description);

    updateTaskList();

    document.getElementById('input-description').value = '';
});

function updateTaskList() {
    var taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 

    tasks.forEach(function(task, index) {
        var listItem = document.createElement('li');
        listItem.textContent = task;

        taskList.appendChild(listItem);
    });
}
