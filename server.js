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

app.get("/(:id)", function (require, respond) {
  respond.render("pad");
});

//Get share dependencies
const sharejs = require("share");
require("redis");

//Options for sharejs
const options = {
  db: { type: "redis" },
};

//Attach the express server to sharejs
sharejs.server.attach(app, options);

//Listen on port 8000 (for local host) or the port defined for heroku
const port = process.env.PORT || 8000;
app.listen(port);
