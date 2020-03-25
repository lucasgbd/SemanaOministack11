
exports.up = function(knex) {
  return knex.schema.createTable('agenda', function(table) {
      table.increments();

      table.string('dentista_id').notNullable();

      table.string('descricao').notNullable();
      table.datetime('criadoEm').defaultTo(knex.fn.now());

      table.foreign('dentista_id').references('id').inTable('dentista');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('agenda');
};
