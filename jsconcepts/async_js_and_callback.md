
### Q:11

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

```
### Q:12

```js
console.log("Message 1");

setTimeout(function() {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");

```
### Q:13

```js
let count = 0;

const intervalId = setInterval(() => {
  console.log("Loading...");
  count++;

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000);

```
### Q:14

```js
console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

```
### Q:15

```js
<!DOCTYPE html>
<html>
<head>
  <title>Countdown Timer</title>
</head>
<body>
  <script>
    let seconds = parseInt(prompt("Enter countdown seconds:"), 10);

    if (isNaN(seconds) || seconds <= 0) {
      console.log("Please enter a valid positive number.");
    } else {
      let countdown = seconds;

      console.log(`Countdown starts from ${countdown} seconds`);

      const intervalId = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          console.log(`Time left: ${countdown}s`);
        } else {
          console.log("Countdown Complete!");
          clearInterval(intervalId);
        }
      }, 1000);

      // Listen for keypress
      document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "s") {
          clearInterval(intervalId);
          console.log("Countdown stopped by user.");
        }
      });

      // Optional: Show user how to stop it
      setTimeout(() => {
        console.log("Press 's' to stop the countdown early.");
      }, 500);
    }
  </script>
</body>
</html>

```