const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello world!");
});

// Setting up port
app.listen(port, () => {
  console.log("APP is listening on port " + port);
});
