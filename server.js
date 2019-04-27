 
const express = require("express");
const methodOverride = require('method-override');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(process.cwd() + '/public'));

 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 
app.use(methodOverride('_method'));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 
const routes = require("./controllers/burgers_controller");

app.use(routes);
 
app.listen(PORT, () => {
 
  console.log("Server listening on: http://localhost:" + PORT);
});
