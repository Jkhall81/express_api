// Import required modules
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Export the Express app
module.exports = app;
