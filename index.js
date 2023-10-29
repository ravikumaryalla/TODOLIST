// JavaScript code for the to-do list functionality
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    let taskId = 1;

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <input type="checkbox" class="checkbox" id="task${taskId}">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            // Add task to the list
            taskList.appendChild(taskItem);
            taskId++;

            // Update task count
            totalTasks.textContent = taskList.children.length;
            taskInput.value = "";

            // Attach event listener to the delete button
            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
                totalTasks.textContent = taskList.children.length;
            });

            // Attach event listener to the checkbox
            const checkbox = taskItem.querySelector(".checkbox");
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    taskItem.classList.add("completed");
                } else {
                    taskItem.classList.remove("completed");
                }
                updateCompletedCount();
            });
        }
    });

    function updateCompletedCount() {
        const completedTasksCount = document.querySelectorAll(".completed").length;
        completedTasks.textContent = completedTasksCount;
    }
});
