const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`summan är : ${result}`);
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let heightnumber = (height / 100) * 2;
  let n = weight / heightnumber;

  res.send(`Ditt BMI  är : ${n.toFixed(2)}`);
});
