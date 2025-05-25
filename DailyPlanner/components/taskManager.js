import { getTasksFromStorage, saveTasksToStorage } from "../utils/utils.js";

let tasks = getTasksFromStorage();

export function renderTasks(filtered = tasks) {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  if (filtered.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No tasks available!";
    emptyMsg.className = "no-tasks";
    taskList.appendChild(emptyMsg);
    return;
  }

  filtered.forEach((task, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = "task" + (task.completed ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(index));

    const span = document.createElement("span");
    span.textContent = `${task.text}`;
    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTask(index));

    taskEl.appendChild(checkbox);
    taskEl.appendChild(span);
    taskEl.appendChild(delBtn);
    taskList.appendChild(taskEl);
  });
}

export function addTask() {
  const input = document.getElementById("task-input");

  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, completed: false });
  input.value = "";
  saveTasksToStorage(tasks);
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasksToStorage(tasks);
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasksToStorage(tasks);
  renderTasks();
}

export function clearAllTasks() {
  tasks = [];
  saveTasksToStorage(tasks);
  renderTasks();
}

export function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const filtered = tasks.filter((task) =>
    task.text.toLowerCase().includes(query)
  );
  renderTasks(filtered);
}

export function toggleBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
