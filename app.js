const express = require('express');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

// Setting view engine
app.set('view engine', 'ejs');


// Setting public for static files
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render("home");
});

// Setting up port
app.listen(port, () => {
  console.log("APP is listening on port " + port);
});
