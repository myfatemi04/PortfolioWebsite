interface Image {
    file: string,
    alt: string
}

type Column = Image[];

interface Project {
    id: string,
    name: string,
    githubLink?: string,
    liveLink?: string,
    images?: Column[],
    html?: string,
    descHtml?: string,
    videoEmbed?: string
}

let fs = require("fs");
let md = require("markdown-it")({ html: true, breaks: true });
let renderMDFile = (filename: string) => md.render(fs.readFileSync(filename, "utf-8"));
let youtubeEmbed = (id: string) => {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

let coronavision: Project = {
    id: "2020/coronavision",
    name: "Coronavision",
    githubLink: "https://www.github.com/o-wth/Corona-Vision",
    liveLink: "https://www.coronavision.us/",
    images: [
        [
            { file: "/img/projects/2020/coronavision/MainPage-Stats.png", alt: "Live stats"},
            { file: "/img/projects/2020/coronavision/MainPage-Table.png", alt: "Live data table"},
            { file: "/img/projects/2020/coronavision/Maps-WorldMap.png", alt: "Choropleth map of cases"}],
        [
            { file: "/img/projects/2020/coronavision/News.png", alt: "News feed"},
            { file: "/img/projects/2020/coronavision/Charts-DailyTotal.png", alt: "Chart showing the number of new cases per day"},
            { file: "/img/projects/2020/coronavision/Maps-Heatmap.png", alt: "Heatmap of cases"}],
        [
            { file: "/img/projects/2020/coronavision/Charts-Recoveries.png", alt: "Chart showing the number of recoveries per day"},
            { file: "/img/projects/2020/coronavision/HowToHelp.png", alt: "Page showing ways to help"}],
        [
            { file: "/img/projects/2020/coronavision/Maps-CountyLevel.png", alt: "Choropleth map at the county level"},
            { file: "/img/projects/2020/coronavision/Maps-ChooseFeature.png", alt: "Maps were very flexible"}],
    ],
    html: renderMDFile("markdown/coronavision.md"),
    descHtml: renderMDFile("markdown/coronavision-desc.md")
};

let eyeos: Project = {
    id: "2020/eyeos",
    name: "EyeOS",
    githubLink: "https://www.github.com/myfatemi04/EyeOS",
    images: [
        [
            { file: "/img/projects/2020/eyeos/Camera.png", alt: "Webcam view, showing positions of pupils"},],
        [
            { file: "/img/projects/2020/eyeos/App-MainPage.png", alt: "UI Main Page (design by Autin Mitra)"},],
        [
            { file: "/img/projects/2020/eyeos/App-Settings.png", alt: "UI Settings (design by Autin Mitra)"},],
        [
            { file: "/img/projects/2020/eyeos/App-AppLauncher.png", alt: "UI App Launcher (design by Autin Mitra)"},],
    ],
    html: renderMDFile("markdown/eyeos.md"),
    descHtml: renderMDFile("markdown/eyeos-desc.md"),
    videoEmbed: youtubeEmbed("PvBQVCoy1MQ")
};

let projects: {[key: string]: Project} = {
    "2020/coronavision": coronavision,
    "2020/eyeos": eyeos
};

let projectYears: {[key: string]: Project[]} = {};
for (let projectID in projects) {
    let year = projectID.slice(0, 4);
    if (!projectYears.hasOwnProperty(year)) {
        projectYears[year] = [];
    }
    projectYears[year].push(projects[projectID]);
}

// Returns a project given a project ID
// Project ID: year/project name. For example: 2020/coronavision
// This is just to keep it organized
function get(projectID: string): Project {
    if (projects.hasOwnProperty(projectID)) {
        return projects[projectID];
    } else {
        return undefined;
    }
}

function getYear(projectYear: string): Project[] {
    if (projectYears.hasOwnProperty(projectYear)) {
        return projectYears[projectYear];
    } else {
        return undefined;
    }
}

// Returns all projects
function all(): Project[] {
    return Object.values(projects);
}

export {
    get,
    all
}