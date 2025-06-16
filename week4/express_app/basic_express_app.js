const express = require("express");
const app = express();
const PORT = 3000;

// Route: GET /home
app.get("/home", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});

// Route: GET /aboutus
app.get("/aboutus", (req, res) => {
  res.json({ message: "Welcome to About Us" });
});

// Route: GET /contactus
app.get("/contactus", (req, res) => {
  res.json({
    phone: "+91-1234567890",
    email: "contact@example.com",
    address: "123 Main Street, City, Country",
  });
});

// Handle 404 - Undefined Routes
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
