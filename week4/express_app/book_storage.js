const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
const DB_PATH = "./books.json";

app.use(express.json());

// Utility to read data
const readBooks = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
};

// Utility to write data
const writeBooks = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
};

// POST /books - Add new book
app.post("/books", (req, res) => {
  const books = readBooks();
  const newBook = req.body;
  books.push(newBook);
  writeBooks(books);
  res.status(201).json(newBook);
});

// GET /books - Retrieve all books
app.get("/books", (req, res) => {
  const books = readBooks();
  res.json(books);
});

// GET /books/:id - Retrieve book by ID
app.get("/books/:id", (req, res) => {
  const books = readBooks();
  const book = books.find((b) => b.id == req.params.id);
  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found" });
});

// PUT /books/:id - Update book by ID
app.put("/books/:id", (req, res) => {
  let books = readBooks();
  const index = books.findIndex((b) => b.id == req.params.id);
  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    writeBooks(books);
    res.json(books[index]);
  } else res.status(404).json({ message: "Book not found" });
});

// DELETE /books/:id - Delete book by ID
app.delete("/books/:id", (req, res) => {
  let books = readBooks();
  const filteredBooks = books.filter((b) => b.id != req.params.id);
  if (filteredBooks.length === books.length)
    return res.status(404).json({ message: "Book not found" });
  writeBooks(filteredBooks);
  res.json({ message: "Book deleted" });
});

// GET /books/search - Search by author or title
app.get("/books/search", (req, res) => {
  const { author, title } = req.query;
  let books = readBooks();

  if (author) {
    books = books.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (title) {
    books = books.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (books.length === 0) return res.json({ message: "No books found" });

  res.json(books);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
