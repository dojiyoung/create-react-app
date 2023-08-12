// app.js
const express = require("express");
const cors = require("cors");

// routes
const books = require("./routes/api/books");

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

const port = process.env.PORT || 8082;

const errors = null;
try {
  const connectDB = require("./config/db");

  connectDB();

  // use Routes
  app.use("/api/books", books);
} catch (err) {
  errors = err;
}

app.get("/errors/", (req, res) => res.send(JSON.stringify(errors)));

app.listen(port, () => console.log(`Server running on port ${port}`));

// Connect Database
