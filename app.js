const express = require("express");

// init app
const app = express();

// serve static files
app.use(express.static("./"));

app.get("/helloworld", (_, res) => {
  res.send("Hola Mundo 👽");
});

app.listen(5000, () => {
  console.log("Listening @ 5000");
});
