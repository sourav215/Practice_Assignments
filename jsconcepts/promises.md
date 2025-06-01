### Q:11

```js
function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}
timer(3000, function (message) {
  console.log(message);
});
```

### Q:12

```js

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // Generate a random number between 0 and 1
      const isSuccess = Math.random() > 0.5;

      
      if (isSuccess) {
        resolve("Fetched data successfully!");
      } else {
        reject("Network error: Failed to fetch data.");
      }
    }, 1000); 
  });
}


async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchDataHandler();
```

### Q:13
