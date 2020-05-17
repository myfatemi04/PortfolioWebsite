"use strict";
exports.__esModule = true;
exports.all = exports.get = void 0;
var fs = require("fs");
var md = require("markdown-it")({ html: true });
var renderMDFile = function (filename) { return md.render(fs.readFileSync(filename, "utf-8")); };
var coronavision = {
    name: "Coronavision",
    githubLink: "https://www.github.com/o-wth/Corona-Vision",
    liveLink: "https://www.coronavision.us/",
    images: [
        [
            { file: "/img/projects/2020/coronavision/MainPage-Stats.png", alt: "Live stats" },
            { file: "/img/projects/2020/coronavision/MainPage-Table.png", alt: "Live data table" },
            { file: "/img/projects/2020/coronavision/Maps-WorldMap.png", alt: "Choropleth map of cases" }
        ],
        [
            { file: "/img/projects/2020/coronavision/News.png", alt: "News feed" },
            { file: "/img/projects/2020/coronavision/Charts-DailyTotal.png", alt: "Chart showing the number of new cases per day" },
            { file: "/img/projects/2020/coronavision/Maps-Heatmap.png", alt: "Heatmap of cases" }
        ],
        [
            { file: "/img/projects/2020/coronavision/Charts-Recoveries.png", alt: "Chart showing the number of recoveries per day" },
            { file: "/img/projects/2020/coronavision/HowToHelp.png", alt: "Page showing ways to help" }
        ],
        [
            { file: "/img/projects/2020/coronavision/Maps-CountyLevel.png", alt: "Choropleth map at the county level" },
            { file: "/img/projects/2020/coronavision/Maps-ChooseFeature.png", alt: "Maps were very flexible" }
        ],
    ],
    html: renderMDFile("markdown/coronavision.md"),
    descHtml: renderMDFile("markdown/coronavision-desc.md")
};
var eyeos = {
    name: "EyeOS",
    githubLink: "https://www.github.com/myfatemi04/EyeOS",
    html: renderMDFile("markdown/eyeos.md"),
    descHtml: renderMDFile("markdown/eyeos-desc.md")
};
var projects = {
    "2020/coronavision": coronavision,
    "2020/eyeos": eyeos
};
function get(projectID) {
    if (projects.hasOwnProperty(projectID)) {
        return projects[projectID];
    }
    else {
        return undefined;
    }
}
exports.get = get;
function all() {
    return Object.values(projects);
}
exports.all = all;
