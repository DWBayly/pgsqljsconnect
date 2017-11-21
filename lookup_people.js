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
const args = process.argv[2];
console.log('Searching...');
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query('SELECT *from famous_people where last_name =\''+args+'\'', (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Found "+ result.rows.length+);
    for (x in result.rows){ //output: 1
        console.log("-"+(x+1+)+":"+result.rows[x].first_name+" "+result.rows[x].last_name+", born "+(result.rows[x].birthdate.getDay())+"-"+(result.rows[x].birthdate.getMonth()+1)+"-"+(1900+result.rows[x].birthdate.getYear()) );
    }
    client.end();
  });
});

