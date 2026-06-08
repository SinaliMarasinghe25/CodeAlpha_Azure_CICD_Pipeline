const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

async function fetchTasks() {
  try {
    const response = await fetch("/api/tasks");
    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.className = "task-item";

      const title = document.createElement("span");
      title.className = task.completed ? "task-title completed" : "task-title";
      title.textContent = task.title;

      const actions = document.createElement("div");
      actions.className = "task-actions";

      const completeButton = document.createElement("button");
      completeButton.className = "complete-btn";
      completeButton.textContent = task.completed ? "Undo" : "Done";
      completeButton.onclick = () => toggleTask(task.id);

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => deleteTask(task.id);

      actions.appendChild(completeButton);
      actions.appendChild(deleteButton);

      listItem.appendChild(title);
      listItem.appendChild(actions);

      taskList.appendChild(listItem);
    });
  } catch (error) {
    statusMessage.textContent = "Unable to load tasks.";
  }
}

async function addTask(title) {
  try {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });

    if (!response.ok) {
      statusMessage.textContent = "Task title is required.";
      return;
    }

    taskInput.value = "";
    statusMessage.textContent = "Task added successfully.";
    fetchTasks();
  } catch (error) {
    statusMessage.textContent = "Unable to add task.";
  }
}

async function toggleTask(id) {
  try {
    await fetch(`/api/tasks/${id}`, {
      method: "PATCH"
    });

    statusMessage.textContent = "Task status updated.";
    fetchTasks();
  } catch (error) {
    statusMessage.textContent = "Unable to update task.";
  }
}

async function deleteTask(id) {
  try {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE"
    });

    statusMessage.textContent = "Task deleted successfully.";
    fetchTasks();
  } catch (error) {
    statusMessage.textContent = "Unable to delete task.";
  }
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (!title) {
    statusMessage.textContent = "Please enter a task.";
    return;
  }

  addTask(title);
});

fetchTasks();