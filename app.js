const express = require("express");
const dotenv = require("dotenv");
require("colors");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in development ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold.underline
  );
});
