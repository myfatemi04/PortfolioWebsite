"use strict";
exports.__esModule = true;
var Express = require("express");
var hbs = require("hbs");
var fs = require("fs");
var projects = require("./projects");
var app = Express();
// We are using Handlebars
app.set('view engine', 'hbs');
app.set('views', './views');
// Partials so we can reuse code
function makePartials(names) {
    names.forEach(function (name) { return hbs.registerPartial(name, fs.readFileSync("views/" + name + ".hbs", "utf-8")); });
}
makePartials(['css', 'nav', 'footer', 'project-list']);
app.use("/", Express.static('./static'));
app.get("/", function (req, res) {
    res.render("index", { projects: projects.all });
});
// Saves typing
function route(files) {
    files.forEach(function (file) {
        app.get("/" + file, function (req, res) { return res.render(file); });
    });
}
route(['contact']);
app.use("/projects", function (req, res) {
    var projectID = req.path.slice(1); //.slice(1) to get rid of the slash
    var projectInfo = projects.get(projectID);
    res.render("project", projectInfo);
});
// // Allows us to load previous projects
// // import * as coronavision from "./projects/2020/coronavision/webapp";
// // coronavision.registerPartials();
// // let coronavisionApp = Express();
// // coronavisionApp.use(Express.static("./projects/2020/coronavision/static/"));
// // coronavisionApp.use("/", coronavision.getRouter());
// // coronavisionApp.set("views", "./projects/2020/coronavision/views/");
// // app.use("/projects/2020/coronavision/live/", coronavisionApp);
var port = 5000;
console.log("Listening on", port);
app.listen(port);
