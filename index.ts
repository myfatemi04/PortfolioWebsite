import * as Express from "express";
import * as hbs from "hbs";
import * as fs from "fs";

const app = Express();

// We are using Handlebars
app.set('view engine', 'hbs');
app.set('views', './views');

// Partials so we can reuse code
function makePartial(name: string) {
    hbs.registerPartial(name, fs.readFileSync("views/" + name + ".hbs", "utf-8"));
}

makePartial("css");
makePartial("nav");
makePartial("footer");

app.use(Express.static('./static'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

let port = 5000;
console.log("Listening on", port);
app.listen(port);
