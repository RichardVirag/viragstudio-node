const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
/* const wbm = require('wbm'); */

const routes = require("./routes");

const server = express();
server.listen(process.env.PORT ? Number(process.env.PORT) : 5000);

/* wbm.start().then(async () => {
    const phones = ['5535988841854', '35988841854', '5535988841854'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err)); */

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
