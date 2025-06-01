### Q:11

```js
function processProducts(products) {
  const productNames = products.map((product) => product.name);

  products.forEach((product) => {
    const message =
      product.price > 50
        ? `${product.name} is above $50`
        : `${product.name} is below $50`;
    console.log(message);
  });

  return productNames;
}

const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

processProducts(input);
```

### Q:12

```js
function processStudents(students) {
  return students
    .filter((student) => student.marks > 60)
    .sort((a, b) => b.marks - a.marks)
    .map((student) => student.name);
}

const input = [
  { name: "Alice", marks: 58 },
  { name: "Bob", marks: 85 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 45 },
  { name: "Emma", marks: 76 },
  { name: "Frank", marks: 63 },
  { name: "Grace", marks: 89 },
  { name: "Hannah", marks: 95 },
  { name: "Ian", marks: 54 },
  { name: "Jack", marks: 79 },
  { name: "Kate", marks: 67 },
  { name: "Leo", marks: 88 },
  { name: "Mia", marks: 91 },
  { name: "Nathan", marks: 72 },
  { name: "Olivia", marks: 82 },
];

console.log(processStudents(input));
```

### Q:13

```js
function countCategories(categories) {
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  return { counts, sortedCategories };
}

const input = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

console.log(countCategories(input));
```

### Q:14

```js
function evaluateEmployees(employees) {
  const performancePriority = {
    Excellent: 3,
    Good: 2,
    "Needs Improvement": 1,
  };

  return employees
    .filter((emp) => emp.tasksCompleted > 5)
    .map((emp) => {
      let performance;
      if (emp.rating > 4.5) performance = "Excellent";
      else if (emp.rating >= 3) performance = "Good";
      else performance = "Needs Improvement";
      return { name: emp.name, performance };
    })
    .sort(
      (a, b) =>
        performancePriority[b.performance] - performancePriority[a.performance]
    );
}

const input = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

console.log(evaluateEmployees(input));
```

