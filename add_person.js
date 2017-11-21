const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
var knex = require('knex')({
  client: 'pg',
  version: '10.0',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});
knex('famous_people').insert({first_name:process.argv[2],last_name:process.argv[3],birthdate:process.argv[4]}).then( function (result) {
          console.log(result) 
       });
//knex.select().from('famous_people').then(function(result){
// console.log(result)
//});

/*const args = process.argv[2];
console.log('Searching...');
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("select * from famous_people", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Found "+ result.rows.length+'results');
    for (x in result.rows){ //output: 1
        console.log(result.rows[x]);
    }
    client.end();
  });
});*/
