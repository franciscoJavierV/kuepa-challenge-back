const express = require("express");
const CORS = require("cors");
const morgan = require('morgan');
const app = express();

app.use(CORS());
app.use(morgan('dev'));
app.use(express.json());

require('./startup/database');
// Configuración de routers
require('./startup/routes')(app);
require("./components/routes/auth.routes")(app);
//settings
app.set('port' , process.env.PORT ||  3000);

app.listen(3000, function () {
  console.log("3000!");
});
