const express = require("express");
const CORS = require("cors");
const morgan = require('morgan');
const app = express();

app.use(CORS());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT ||  3000

require('./startup/database');
// Configuración de routes
require('./startup/routes')(app);
require("./components/routes/auth.routes")(app);
//settings
app.set('port' , process.env.PORT ||  3000);


app.get('/', (req, res) => {
  res.send( res.status(200).json({
message:"Hola desde el backend de chat kuepa",
  }))
})

app.listen(port, function () {
  console.log("3000!");
});
