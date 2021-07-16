const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// function for adding two numbers
addTwoNumbers = (a, b ) => {
  return a+b
}

const sum = addTwoNumbers(2,3)
console.log(sum)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
