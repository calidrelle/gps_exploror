const sqlite3 = require('sqlite3').verbose();
let sql;

// Connect to DB
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// create table
//sql = `CREATE TABLE users(id integer primary key, nom, prenom, login, password, email)`;
//db.run(sql);

// drop table
//db.run('drop table users');

// Insert data into table
/*
sql = `insert into users(nom, prenom, login, password, email) values (?,?,?,?,?)`;
db.run(sql, ["DARRIEUMERLOU", "Christine", "puce", "titi", "ch.darrieumerlou@gmail.com"], (err) => {
  if (err) return console.error(err.message)
});
*/

// update data
//sql = `update users set password=? where id=?`;
//db.run(sql, ['new_pwd', 1], (err) => {
//  if (err) { return console.error(err.message); }
//});

// delete row
sql = `delete from users where id=?`;
db.run(sql, [2], (err) => {
  if (err) { return console.error(err.message); }
});

// Query the data
sql = `select * from users`;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach(row => {
    console.log(row)
  });
});
