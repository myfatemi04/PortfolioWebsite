import * as Express from "express";
import * as hbs from "hbs";
import * as fs from "fs";
import * as projects from "./projects";
// import tutorials from "./tutorials";

const app = Express();

// We are using Handlebars
app.set('view engine', 'hbs');
app.set('views', './views');

// Partials so we can reuse code
function makePartials(names: string[]) {
    names.forEach(
        name => hbs.registerPartial(name, fs.readFileSync("views/" + name + ".hbs", "utf-8"))
    );
}

makePartials(['css', 'nav', 'footer', 'project-list']);

app.use("/", Express.static('./static'));
app.get("/", (req, res) => {
    res.render("index", { projects: projects.all });
});

// Saves typing
function route(files: string[]) {
    files.forEach(file => {
        app.get("/" + file, (req, res) => res.render(file));
    });
}
route(['contact']);

app.use("/projects", (req, res) => {
    let projectID = req.path.slice(1); //.slice(1) to get rid of the slash
    if (!projectID) {
        res.render("projects", { projects: projects.all });
    } else {
        let projectInfo = projects.get(projectID);
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

let port = process.env.PORT;
console.log("Listening on", port);
app.listen(port);
