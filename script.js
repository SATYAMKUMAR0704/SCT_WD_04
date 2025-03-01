function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="check-btn" onclick="toggleDone(this)">
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleDone(checkbox) {
    let taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}
