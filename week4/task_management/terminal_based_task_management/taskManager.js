const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const tasksFile = path.join(__dirname, "tasks.json");
const prefFile = path.join(__dirname, "preferences.json");

function loadTasks() {
  try {
    if (!fs.existsSync(tasksFile)) return [];
    return JSON.parse(fs.readFileSync(tasksFile, "utf-8"));
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

function loadPreferences() {
  if (!fs.existsSync(prefFile)) {
    return { filter: "all" };
  }
  return JSON.parse(fs.readFileSync(prefFile, "utf-8"));
}

function savePreferences(pref) {
  fs.writeFileSync(prefFile, JSON.stringify(pref, null, 2));
}

// Validate date format
function isValidDate(date) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

// Add Task
function addTask(title, dueDate) {
  if (!title.trim() || !dueDate.trim()) {
    console.log(chalk.red("❌ Title and due date cannot be empty."));
    return;
  }
  if (!isValidDate(dueDate)) {
    console.log(chalk.red("❌ Invalid date format. Use YYYY-MM-DD."));
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
  console.log(chalk.green(`✅ Task added: "${title}" due on ${dueDate}`));
}

// List Tasks with filter
function listTasks() {
  const tasks = loadTasks();
  const { filter } = loadPreferences();

  let filteredTasks = tasks;
  if (filter === "completed") filteredTasks = tasks.filter(t => t.completed);
  if (filter === "pending") filteredTasks = tasks.filter(t => !t.completed);

  if (filteredTasks.length === 0) {
    console.log("📭 No tasks to show.");
    return;
  }

  console.log(chalk.yellow.bold(`\n📋 Showing ${filter} tasks:\n`));
  filteredTasks.forEach(task => {
    const status = task.completed ? chalk.green("✅ Completed") : chalk.blue("🕒 Pending");
    console.log(`${task.id}. ${task.title} (Due: ${task.dueDate}) - ${status}`);
  });
}

// Complete Task
function completeTask(identifier) {
  const tasks = loadTasks();
  const task = tasks.find(
    t => t.id == identifier || t.title.toLowerCase() === identifier.toLowerCase()
  );

  if (!task) {
    console.log(chalk.red("❌ Task not found."));
    return;
  }

  task.completed = true;
  saveTasks(tasks);
  console.log(chalk.green(`✅ Task "${task.title}" marked as completed.`));
}

// Set Preferences
function setPreference(filter) {
  const valid = ["all", "completed", "pending"];
  if (!valid.includes(filter)) {
    console.log(chalk.red("❌ Invalid filter. Choose: all, completed, or pending."));
    return;
  }

  savePreferences({ filter });
  console.log(chalk.green(`✅ Preference set: Only show "${filter}" tasks.`));
}

module.exports = {
  addTask,
  listTasks,
  completeTask,
  setPreference,
};
