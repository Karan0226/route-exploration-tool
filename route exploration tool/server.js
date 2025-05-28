const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

// Home route - serve the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Visualizer route - serve the main app
app.get("/visualizer", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Catch-all for debugging
app.use((req, res) => {
  res.status(404).send(`Page not found: ${req.url}`);
});

app.listen(1337, () => {
  console.log("The server is up and running on http://localhost:1337");
});