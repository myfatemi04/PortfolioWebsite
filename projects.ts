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
}

let fs = require("fs");
let md = require("markdown-it")({ html: true });
let renderMDFile = (filename: string) => md.render(fs.readFileSync(filename, "utf-8"));

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
    html: renderMDFile("markdown/eyeos.md"),
    descHtml: renderMDFile("markdown/eyeos-desc.md")
};

let projects: {[key: string]: Project} = {
    "2020/coronavision": coronavision,
    "2020/eyeos": eyeos
};

function get(projectID: string): Project {
    if (projects.hasOwnProperty(projectID)) {
        return projects[projectID];
    } else {
        return undefined;
    }
}

function all(): Project[] {
    return Object.values(projects);
}

export {
    get,
    all
}