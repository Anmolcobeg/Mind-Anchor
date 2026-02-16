 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    document.addEventListener("DOMContentLoaded", loadTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        createTaskElement(taskText);
        saveTask(taskText);

        taskInput.value = "";
    }

    function createTaskElement(taskText, completed = false) {
        const li = document.createElement("li");
        li.textContent = taskText;

        if (completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            updateStorage();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            li.remove();
            updateStorage();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function saveTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }

    function updateStorage() {
        let tasks = [];
        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push({
                text: li.childNodes[0].textContent,
                completed: li.classList.contains("completed")
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }