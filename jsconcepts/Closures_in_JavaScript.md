

## Q:14
```js
function outerFunction() {
  const message = "Hello from the closure!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

// Demonstrating closure
const storedFunction = outerFunction(); // outerFunction is called here
storedFunction(); // innerFunction is executed here

```