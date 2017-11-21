const pg = require("pg");
const settings = require("../settings");
const kfile = require('../knexfile')
const knex = require('knex')(kfile.development);
exports.up = function(knex, Promise) {
  knex.schema.createTable('milestones', function(table){
      table.string('description');
      table.date('date_achieved');
      table.increments('id');
      table.integer('famous_people_id');
      table.foreign('famous_people_id').references('famous_people.id');
      //table.timestamps();
    }).then(function(){
    //knex.select().from('famous_people').then(function(result){
 //console.log(result)
//});
    }
   );
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('milestones')
  ])
  
};
