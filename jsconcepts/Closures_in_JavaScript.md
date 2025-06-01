## Q:11

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

### Q:12

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());

```
### Q:13

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());

```
### Q:14

```js
function createFunctionList() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

const functionList = createFunctionList();

functionList[0](); // "Index: 0"
functionList[1](); // "Index: 1"
functionList[2](); // "Index: 2"
functionList[3](); // "Index: 3"
functionList[4](); // "Index: 4"

```

