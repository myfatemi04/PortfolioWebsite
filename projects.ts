interface Image {
  /**
   * The URL of the image
   */
  src: string;

  /**
   * A description of the image if the image content can't be loaded
   */
  alt: string;
}

type ImageGalleryColumn = Image[];

interface Project {
  /**
   * Used in URLs
   */
  id: string;

  /**
   * Project name
   */
  name: string;

  /**
   * A short blurb describing what the project is. Should be a noun phrase
   */
  blurb: string;

  /**
   * A short list of features in the project (for a bulletted list)
   */
  features: string[];

  /**
   * The programming languages used in the creation of the project
   */
  languages: string[];

  /**
   * The cover photo to display when showing a condensed version of this project
   */
  thumbnail: string;
  githubLink?: string;
  liveLink?: string;
  images?: ImageGalleryColumn[];
  html?: string;
  videoEmbed?: string;
}

let fs = require("fs");
let md = require("markdown-it")({ html: true, breaks: true });
let renderMDFile = (filename: string) =>
  md.render(fs.readFileSync(filename, "utf-8"));
let youtubeEmbed = (id: string) => {
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

let coronavision: Project = {
  id: "2020-coronavision",
  name: "Coronavision",
  blurb: "Website with detailed insights about the spread of the coronavirus",
  features: [
    "Live state-level data from primary sources",
    "Animated maps",
    "Historical data from the beginning of the virus",
  ],
  languages: ["Python", "NodeJS", "MySQL"],
  githubLink: "https://www.github.com/o-wth/Corona-Vision",
  thumbnail: "/img/projects/2020/coronavision/MainPage-ChoosingState.png",
  // liveLink: "https://www.coronavision.us/",
  images: [
    [
      {
        src: "/img/projects/2020/coronavision/MainPage-Stats.png",
        alt: "Live stats",
      },
      {
        src: "/img/projects/2020/coronavision/MainPage-Table.png",
        alt: "Live data table",
      },
      {
        src: "/img/projects/2020/coronavision/Maps-WorldMap.png",
        alt: "Choropleth map of cases",
      },
    ],
    [
      { src: "/img/projects/2020/coronavision/News.png", alt: "News feed" },
      {
        src: "/img/projects/2020/coronavision/Charts-DailyTotal.png",
        alt: "Chart showing the number of new cases per day",
      },
      {
        src: "/img/projects/2020/coronavision/Maps-Heatmap.png",
        alt: "Heatmap of cases",
      },
    ],
    [
      {
        src: "/img/projects/2020/coronavision/Charts-Recoveries.png",
        alt: "Chart showing the number of recoveries per day",
      },
      {
        src: "/img/projects/2020/coronavision/HowToHelp.png",
        alt: "Page showing ways to help",
      },
    ],
    [
      {
        src: "/img/projects/2020/coronavision/Maps-CountyLevel.png",
        alt: "Choropleth map at the county level",
      },
      {
        src: "/img/projects/2020/coronavision/Maps-ChooseFeature.png",
        alt: "Maps were very flexible",
      },
    ],
  ],
  html: renderMDFile("markdown/coronavision.md"),
};

let eyeos: Project = {
  id: "2020-eyeos",
  name: "EyeOS",
  blurb: "Eye tracking to help the disabled access technology",
  features: ["Control the mouse pointer with eye tracking", "Voice commands"],
  languages: ["Python"],
  githubLink: "https://www.github.com/myfatemi04/EyeOS",
  thumbnail: "/img/projects/2020/eyeos/eye_os_logo.png",
  images: [
    [
      {
        src: "/img/projects/2020/eyeos/Camera.png",
        alt: "Webcam view, showing positions of pupils",
      },
    ],
    [
      {
        src: "/img/projects/2020/eyeos/App-MainPage.png",
        alt: "UI Main Page (UI by Autin Mitra)",
      },
    ],
    [
      {
        src: "/img/projects/2020/eyeos/App-Settings.png",
        alt: "UI Settings (UI by Autin Mitra)",
      },
    ],
    [
      {
        src: "/img/projects/2020/eyeos/App-AppLauncher.png",
        alt: "UI App Launcher (UI by Autin Mitra)",
      },
    ],
  ],
  html: renderMDFile("markdown/eyeos.md"),
  videoEmbed: youtubeEmbed("PvBQVCoy1MQ"),
};

let projects: { [key: string]: Project } = {
  "2020-coronavision": coronavision,
  "2020-eyeos": eyeos,
};

let projectYears: { [key: string]: Project[] } = {};
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

export { get, all };
