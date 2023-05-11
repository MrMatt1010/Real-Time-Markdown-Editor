const express = require("express");
const app = express();

//set the view engine to ejs
app.set("view engine", "ejs");

//Public folder to store assets
app.use(express.static(_dirname + "./public"));

//routes for app
app.get("/", function (require, respond) {
  respond.render("pad");
});

//Listen on port 8000 (for local host) or the port defined for heroku
const port = process.env.PORT || 8000;
app.listen(port);
