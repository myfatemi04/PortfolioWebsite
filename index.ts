import * as Express from "express";
import * as hbs from "hbs";
import * as fs from "fs";
import * as projects from "./projects";
import { skills } from "./skills";

const app = Express();

// We are using Handlebars
app.set("view engine", "hbs");
app.set("views", "./views");

// Partials so we can reuse code
function makePartials(names: string[]) {
  names.forEach((name) =>
    hbs.registerPartial(
      name,
      fs.readFileSync("views/partials/" + name + ".hbs", "utf-8")
    )
  );
}

makePartials(["css", "nav", "footer", "project-list", "skills"]);

app.use("/", Express.static("./static"));
app.get("/", (req, res) => {
  res.render("index", { projects: projects.all(), skills });
});

app.use("/project/:projectID", (req, res) => {
  res.render("project", projects.get(req.params.projectID));
});

let port = process.env.PORT || 5000;
console.log("Listening on", port);
app.listen(port);
