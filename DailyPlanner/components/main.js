// main.js
import {
  addTask,
  renderTasks,
  clearAllTasks,
  handleSearch,
  toggleBackToTop,
} from "./taskManager.js";
import { debounce, throttle } from "../utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  const addBtn = document.getElementById("add-task");
  const clearBtn = document.getElementById("clear-all");
  const searchInput = document.getElementById("search");
  const backToTopBtn = document.getElementById("back-to-top");

  addBtn.addEventListener("click", addTask);
  clearBtn.addEventListener("click", clearAllTasks);

  searchInput.addEventListener("input", debounce(handleSearch, 300));
  window.addEventListener(
    "scroll",
    throttle(() => toggleBackToTop(), 200)
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
