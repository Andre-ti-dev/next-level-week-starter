const express = require('express');
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

server.get("/", (request, response) => {
  return response.render("index.njk");
});

server.get("/create-point", (request, response) => {
  return response.render("create-point.njk");
});

server.get("/search", (request, response) => {
  return response.render("search-results.njk");
});

server.listen(3000);