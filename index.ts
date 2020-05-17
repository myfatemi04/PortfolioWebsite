import * as Express from "express";
import * as hbs from "hbs";
import * as fs from "fs";
import * as projects from "./projects";

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
    let projectInfo = projects.get(projectID);
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

let port = 5000;
console.log("Listening on", port);
app.listen(port);
