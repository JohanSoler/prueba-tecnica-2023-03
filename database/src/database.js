const mongoose = require("mongoose");

const mongodb_uri = process.env.DATABASE_URI;

mongoose
  .connect(mongodb_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Database is conected"))
  .catch((err) => console.log(err));
