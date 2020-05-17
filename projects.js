"use strict";
exports.__esModule = true;
exports.all = exports.get = void 0;
var fs = require("fs");
var md = require("markdown-it")({ html: true, breaks: true });
var renderMDFile = function (filename) { return md.render(fs.readFileSync(filename, "utf-8")); };
var youtubeEmbed = function (id) {
    return "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
};
var coronavision = {
    id: "2020/coronavision",
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
    id: "2020/eyeos",
    name: "EyeOS",
    githubLink: "https://www.github.com/myfatemi04/EyeOS",
    images: [
        [
            { file: "/img/projects/2020/eyeos/Camera.png", alt: "Webcam view, showing positions of pupils" },
        ],
        [
            { file: "/img/projects/2020/eyeos/App-MainPage.png", alt: "UI Main Page (made by Autin Mitra)" },
        ],
        [
            { file: "/img/projects/2020/eyeos/App-Settings.png", alt: "UI Settings (made by Autin Mitra)" },
        ],
        [
            { file: "/img/projects/2020/eyeos/App-AppLauncher.png", alt: "UI App Launcher (made by Autin Mitra)" },
        ],
    ],
    html: renderMDFile("markdown/eyeos.md"),
    descHtml: renderMDFile("markdown/eyeos-desc.md"),
    videoEmbed: youtubeEmbed("PvBQVCoy1MQ")
};
var projects = {
    "2020/coronavision": coronavision,
    "2020/eyeos": eyeos
};
var projectYears = {};
for (var projectID in projects) {
    var year = projectID.slice(0, 4);
    if (!projectYears.hasOwnProperty(year)) {
        projectYears[year] = [];
    }
    projectYears[year].push(projects[projectID]);
}
// Returns a project given a project ID
// Project ID: year/project name. For example: 2020/coronavision
// This is just to keep it organized
function get(projectID) {
    if (projects.hasOwnProperty(projectID)) {
        return projects[projectID];
    }
    else {
        return undefined;
    }
}
exports.get = get;
function getYear(projectYear) {
    if (projectYears.hasOwnProperty(projectYear)) {
        return projectYears[projectYear];
    }
    else {
        return undefined;
    }
}
// Returns all projects
function all() {
    return Object.values(projects);
}
exports.all = all;
