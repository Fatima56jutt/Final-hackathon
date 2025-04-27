function createTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const assigned = document.getElementById('assignedTo').value;

    if (title.trim() === "" || description.trim() === "" || assigned.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all fields!'
        });
        return;
    }

    const task = document.createElement('div');
    task.classList.add('task');
    
    // HTML structure for the task
    task.innerHTML = `
        <h4>${title}</h4>
        <p>${description}</p>
        <p><strong>Assigned to:</strong> ${assigned}</p>
        <div class="task-buttons">
            <button onclick="moveTask(this, 'inProgress')">Move to In Progress</button>
            <button onclick="moveTask(this, 'done')">Move to Done</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>`;

    // Add the new task to the "To Do" column
    document.getElementById('todo').appendChild(task);

    // Reset the input fields after adding the task
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('assignedTo').value = '';
}

// Function to move the task between columns
function moveTask(button, columnId) {
    const task = button.closest('.task');
    document.getElementById(columnId).appendChild(task);
}

// Function to edit the task details
function editTask(button) {
    const task = button.closest('.task');
    const title = prompt("Edit Task Title", task.querySelector('h4').innerText);
    const description = prompt("Edit Task Description", task.querySelector('p').innerText);
    const assigned = prompt("Edit Assigned To", task.querySelector('p').innerText.replace("Assigned to: ", ""));

    if (title && description && assigned) {
        task.querySelector('h4').innerText = title;
        task.querySelector('p').innerText = description;
        task.querySelector('p').innerHTML = "<strong>Assigned to:</strong> " + assigned;
    }
}

// Function to delete the task
function deleteTask(button) {
    const task = button.closest('.task');
    task.remove();
}
