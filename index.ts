import * as Express from "express";
import * as hbs from "hbs";
import * as fs from "fs";

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

makePartials(['css', 'nav', 'footer']);

app.use(Express.static('./static'));

app.get("/", (req, res) => {
    res.render("index");
});

// Saves typing
function route(files: string[]) {
    files.forEach(file => {
        app.get("/" + file, (req, res) => res.render(file));
    });
}
route(['contact', 'projects/2020/coronavision']);

let port = 5000;
console.log("Listening on", port);
app.listen(port);
