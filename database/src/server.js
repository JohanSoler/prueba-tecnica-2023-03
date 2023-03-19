const bodyParser = require("body-parser");
const express = require("express");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require("./routes/waterTankHistory.routes"));
app.get("/", (req, res) => {
  res.send("Base de datos - Prueba tanque");
});

module.exports = app;
