const inquirer = require("inquirer");
const chalk = require("chalk");
const { addTask, listTasks, completeTask } = require("./taskManager");

console.log(chalk.green.bold("\n📝 Welcome to Task CLI Manager!\n"));

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "command",
        message: "Choose an action:",
        choices: ["Add Task", "List Tasks", "Complete Task", "Exit"],
      },
    ])
    .then(answer => {
      switch (answer.command) {
        case "Add Task":
          inquirer
            .prompt([
              { type: "input", name: "title", message: "Task Title:" },
              { type: "input", name: "dueDate", message: "Due Date (YYYY-MM-DD):" },
            ])
            .then(({ title, dueDate }) => {
              addTask(title, dueDate);
              main();
            });
          break;

        case "List Tasks":
          listTasks();
          main();
          break;

        case "Complete Task":
          inquirer
            .prompt([
              {
                type: "input",
                name: "identifier",
                message: "Enter Task ID or Title to mark complete:",
              },
            ])
            .then(({ identifier }) => {
              completeTask(identifier);
              main();
            });
          break;

        case "Exit":
          console.log(chalk.blue("\n👋 Bye! Have a productive day.\n"));
          process.exit();
      }
    });
}

main();
