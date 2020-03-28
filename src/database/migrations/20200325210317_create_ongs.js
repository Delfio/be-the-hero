exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.integer('id').primary();
    table.string('name').notNullaBle();
    table.string('email').notNullaBle().unique();
    table.string('whatsapp').notNullaBle();
    table.string('city').notNullaBle();
    table.string('uf', 2).notNullaBle();
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('onds');
};
