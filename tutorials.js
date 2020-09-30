"use strict";
exports.__esModule = true;
var fs = require("fs");
var md = require("markdown-it")({ html: true, breaks: true });
var renderMDFile = function (filename) { return md.render(fs.readFileSync(filename, "utf-8")); };
var youtubeEmbed = function (id) {
    return "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
};
var pythonRequests = {
    id: "python-requests",
    name: "Python Requests Module",
    contentHTML: renderMDFile("markdown/python-tutorials/requests.md"),
    descHTML: "Learn how to make web requests in Python!",
    installLinks: [{ type: "pip", command: "pip install requests" }],
    language: "python",
    tags: ["networking", "requests", "python"],
    category: "networking",
    length: "10 min"
};
var tutorials = {
    python: [
        pythonRequests,
    ]
};
exports["default"] = tutorials;
