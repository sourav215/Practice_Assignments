### Q:6

```js
let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science",
};

let jsonString = JSON.stringify(student, null, 2);
console.log(jsonString);
```

### Q:7

```js
function multiply(a, b) {
  return a * b;
}

function multiplyNumbers(num1, num2) {
  return multiply.apply(null, [num1, num2]);
}

console.log(multiplyNumbers(5, 4)); // Output: 20
```

### Q:8

```js
function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Alice",
  age: 25,
};

personInfo.call(person);
```
