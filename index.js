"use strict";
exports.__esModule = true;
var Express = require("express");
var hbs = require("hbs");
var fs = require("fs");
var app = Express();
// We are using Handlebars
app.set('view engine', 'hbs');
app.set('views', './views');
// Partials so we can reuse code
hbs.registerPartial("css", fs.readFileSync("views/css.hbs", "utf-8"));
hbs.registerPartial("nav", fs.readFileSync("views/nav.hbs", "utf-8"));
app.use(Express.static('./static'));
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
var port = 5000;
console.log("Listening on", port);
app.listen(port);
