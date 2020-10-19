const express = require("express");

// init app
const app = express();

app.use(express.static("./"));

// app.get("/", (_, res) => {
//   res.send("Hola Mundo 👽");
// });

app.listen(5000, () => {
  console.log("Listening @ 5000");
});
