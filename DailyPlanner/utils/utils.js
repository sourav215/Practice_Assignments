
export function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

export function saveTasksToStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
