exports.up = function (knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('priority')
    table.boolean('complete')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('todos')
}
