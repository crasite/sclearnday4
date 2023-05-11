const express = require("express");
const app = express();
const port = 3000;
const randomNumber = Math.random() * 10000;

app.get("/*", (req, res) => {
  res.send(
    `Random Number: ${randomNumber} Path: ${req.url} Env: ${process.env.NODESERVER}`
  );
});

app.listen(port, () => {
  console.log(`Running server on port: ${port}`);
});
