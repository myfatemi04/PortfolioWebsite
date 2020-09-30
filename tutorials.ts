interface InstallLink {
    type: "pip",
    command: string
}

interface Tutorial {
    id: string,
    name: string,

    // content
    contentHTML: string,
    descHTML: string,
    installLinks: InstallLink[],

    // for ease of access
    language: "python" | "javascript",
    tags: string[],
    category: string,

    // for seo
    sections?: { [sectionID: string]: string },

    // 1 min, 2 min, etc.
    length: string,
}

let fs = require("fs");
let md = require("markdown-it")({ html: true, breaks: true });

let renderMDFile = (filename: string) => md.render(fs.readFileSync(filename, "utf-8"));
let youtubeEmbed = (id: string) => {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

let pythonRequests: Tutorial = {
    id: "python-requests",
    name: "Python Requests Module",
    contentHTML: renderMDFile("markdown/python-tutorials/requests.md"),
    descHTML: "Learn how to make web requests in Python!",
    installLinks: [{ type: "pip", command: "pip install requests" }],
    language: "python",
    tags: [ "networking", "requests", "python" ],
    category: "networking",
    length: "10 min"
};

let tutorials = {
    python: [
        pythonRequests,
    ]
}

export default tutorials;