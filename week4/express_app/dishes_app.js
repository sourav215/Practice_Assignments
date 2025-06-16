const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
const DB_PATH = "./dishes.json";

app.use(express.json());

// Utility: Read data
const readDishes = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
};

// Utility: Write data
const writeDishes = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
};

// POST /dishes → Add new dish
app.post("/dishes", (req, res) => {
  const dishes = readDishes();
  const newDish = req.body;
  dishes.push(newDish);
  writeDishes(dishes);
  res.status(201).json(newDish);
});

// GET /dishes → Retrieve all dishes
app.get("/dishes", (req, res) => {
  const dishes = readDishes();
  res.json(dishes);
});

// GET /dishes/:id → Retrieve dish by ID
app.get("/dishes/:id", (req, res) => {
  const dishes = readDishes();
  const dish = dishes.find((d) => d.id == req.params.id);
  if (dish) res.json(dish);
  else res.status(404).json({ message: "Dish not found" });
});

// PUT /dishes/:id → Update dish by ID
app.put("/dishes/:id", (req, res) => {
  let dishes = readDishes();
  const index = dishes.findIndex((d) => d.id == req.params.id);
  if (index !== -1) {
    dishes[index] = { ...dishes[index], ...req.body };
    writeDishes(dishes);
    res.json(dishes[index]);
  } else {
    res.status(404).json({ message: "Dish not found" });
  }
});

// DELETE /dishes/:id → Delete dish by ID
app.delete("/dishes/:id", (req, res) => {
  let dishes = readDishes();
  const filtered = dishes.filter((d) => d.id != req.params.id);
  if (filtered.length === dishes.length) {
    return res.status(404).json({ message: "Dish not found" });
  }
  writeDishes(filtered);
  res.json({ message: "Dish deleted" });
});

// GET /dishes/get?name= → Search by name (partial match)
app.get("/dishes/get", (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const dishes = readDishes();
  const matches = dishes.filter((d) =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );

  if (matches.length === 0) {
    res.json({ message: "No dishes found" });
  } else {
    res.json(matches);
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
