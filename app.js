const express     = require('express');
const ejs         = require('ejs');
const bodyParser  = require('body-parser');
const routs       = require('./routs/index');

const app = express();
const port = process.env.PORT || 3000;

// Setting view engine
app.set('view engine', 'ejs');

// Routs
app.get('/', routs.home);

// Setting public for static files
app.use('/', express.static(__dirname + '/public'));

// 404 Middleware
app.use(routs.notFound);

// Setting up port
app.listen(port, () => {
  console.log("APP is listening on port " + port);
});
