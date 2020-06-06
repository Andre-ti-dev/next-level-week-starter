const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     )
//   `);

//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//   `;

//   const values = [
//     'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=40',
//     'Papersider',
//     'Guilerme Gemballa, Jardim América',
//     'N°260',
//     'Santa Catarina',
//     'Rio do Sul',
//     'Papéis e Papelão'
//   ];

//   function afterInserData(err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Cadastrado com sucesso");
//     console.log(this);
//   }

//   db.run(query, values, afterInserData);

//   db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Deletado com sucesso!");
//   });

//   db.all("SELECT * FROM places", function(err, rows) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log(rows);
//   });

// });