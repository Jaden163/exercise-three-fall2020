const express = require("express");
const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

const app = express();
const port = 4000;

// Serve Static Files
app.use("/static", express.static("public"));

// Routing in Express
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
