const router = require("express").Router();
const Note = require("../models/Note");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
};

// Get notes
router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// Add note
router.post("/", auth, async (req, res) => {
  const note = await Note.create({ ...req.body, user: req.user.id });
  res.status(201).json(note);
});

// Update note
router.put("/:id", auth, async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(note);
});

// Delete note
router.delete("/:id", auth, async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: "Deleted" });
});

module.exports = router;
