const express = require('express');
const nunjucks = require('nunjucks');
const db = require('./database/db');

const server = express();

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));


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

server.post("/save-point", (request, response) => {
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  const { image, name, address, address2, state, city, items } = request.body;

  const values = [
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ];

  function afterInsertData(err) {
    if (err) {
      console.log(err);
      return response.send("Erro no cadastro!")
    }

    console.log("Cadastrado com sucesso");
    console.log(this);
    return response.render("create-point.njk", { saved: true });
  }

  db.run(query, values, afterInsertData);
});

server.get("/search", (request, response) => {

  const search = request.query.search;
  if (search == "") {
    return response.render("search-results.njk", { total: 0 });
  }
  
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
          return console.log(err);
        }
        const total = rows.length;
        return response.render("search-results.njk", { points: rows, total });
      });
});

server.listen(3000);