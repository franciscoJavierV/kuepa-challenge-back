const express = require("express");
const CORS = require("cors");
const morgan = require('morgan');
const app = express();

app.use(CORS());
app.use(morgan('dev'));
app.use(express.json());

require('./startup/database');
// Configuración de routes
require('./startup/routes')(app);
require("./components/routes/auth.routes")(app);
//settings
app.set('port' , process.env.PORT ||  3005);

app.listen(3002, function () {
  console.log("3000!");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})