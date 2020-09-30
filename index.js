"use strict";
exports.__esModule = true;
var Express = require("express");
var hbs = require("hbs");
var fs = require("fs");
var projects = require("./projects");
// import tutorials from "./tutorials";
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
    if (!projectID) {
        res.render("projects", { projects: projects.all });
    }
    else {
        var projectInfo = projects.get(projectID);
        res.render("project", projectInfo);
    }
});
/*

app.use("/python-tutorial", (req, res) => {
    let tutorialID = req.path.slice(1);
    if (!tutorialID) {
        res.render("python-tutorial");
    } else {
        let tutorialInfo = tutorials[tutorialID];
        res.render("tutorial", tutorialInfo);
    }
});

*/
var port = 5000;
console.log("Listening on", port);
app.listen(port);
