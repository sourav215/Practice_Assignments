const fs = require("fs");
const tasksFile = "tasks.json";

// Load tasks
function loadTasks() {
  if (!fs.existsSync(tasksFile)) return [];
  const data = fs.readFileSync(tasksFile, "utf-8");
  return JSON.parse(data);
}

// Save tasks
function saveTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// Add task
function addTask(title, dueDate) {
  if (!title || !dueDate) {
    console.log("❌ Title and due date are required.");
    return;
  }

  const tasks = loadTasks();
  const newTask = {
    id: tasks.length + 1,
    title,
    dueDate,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`✅ Task added: "${title}" due on ${dueDate}`);
}

// List tasks
function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("📭 No tasks found.");
    return;
  }

  console.log("\n📋 Your Tasks:\n");
  tasks.forEach(task => {
    const status = task.completed ? "✅ Completed" : "🕒 Pending";
    console.log(`${task.id}. ${task.title} (Due: ${task.dueDate}) - ${status}`);
  });
}

// Complete task
function completeTask(identifier) {
  const tasks = loadTasks();
  const task = tasks.find(
    t => t.id == identifier || t.title.toLowerCase() === identifier.toLowerCase()
  );

  if (!task) {
    console.log("❌ Task not found.");
    return;
  }

  task.completed = true;
  saveTasks(tasks);
  console.log(`✅ Marked "${task.title}" as completed.`);
}

module.exports = { addTask, listTasks, completeTask };
