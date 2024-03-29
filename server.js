const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require('body-parser');

const routes = require("./routes");

const server = express();
server.use(bodyParser.urlencoded({ extended: true }))
server.listen(process.env.PORT ? Number(process.env.PORT) : 5000);

server.use(express.static(path.join(__dirname, "assets")));
server.use('/portfolio', express.static(path.join(__dirname, "assets")));

server.set("view engine", "handlebars");
server.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
  })
);

routes(server);

server.locals.copyright = new Date().getFullYear();
