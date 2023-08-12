// app.js
const connectDB = require("./db_conn");
const cors = require("cors");

const express = require("express");
const booksAPI = require("./api");

const port = process.env.PORT || 8082;

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Connect to DB
connectDB();

// Setup route
app.use("/api/books", booksAPI);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
