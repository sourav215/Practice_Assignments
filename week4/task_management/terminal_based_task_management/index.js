const inquirer = require("inquirer");
const chalk = require("chalk");
const {
  addTask,
  listTasks,
  completeTask,
  setPreference,
} = require("./taskManager");

console.log(chalk.magenta.bold("\n🧠 Welcome to Task Manager (L2 Edition)\n"));

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "command",
        message: "What do you want to do?",
        choices: [
          "Add Task",
          "List Tasks",
          "Complete Task",
          "Set Preferences",
          "Exit",
        ],
      },
    ])
    .then(({ command }) => {
      switch (command) {
        case "Add Task":
          inquirer
            .prompt([
              { type: "input", name: "title", message: "Task Title:" },
              {
                type: "input",
                name: "dueDate",
                message: "Due Date (YYYY-MM-DD):",
              },
            ])
            .then(({ title, dueDate }) => {
              addTask(title, dueDate);
              mainMenu();
            });
          break;

        case "List Tasks":
          listTasks();
          mainMenu();
          break;

        case "Complete Task":
          inquirer
            .prompt([
              {
                type: "input",
                name: "identifier",
                message: "Enter Task ID or Title:",
              },
            ])
            .then(({ identifier }) => {
              completeTask(identifier);
              mainMenu();
            });
          break;

        case "Set Preferences":
          inquirer
            .prompt([
              {
                type: "list",
                name: "filter",
                message: "Select task display preference:",
                choices: ["all", "completed", "pending"],
              },
            ])
            .then(({ filter }) => {
              setPreference(filter);
              mainMenu();
            });
          break;

        case "Exit":
          console.log(chalk.cyan("\n👋 Goodbye!\n"));
          process.exit();
      }
    });
}

mainMenu();
