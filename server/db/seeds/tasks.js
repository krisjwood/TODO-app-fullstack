exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        { id: 1, title: 'workout', description: 'at the gym', priority: 'low', complete: true },
        { id: 2, title: 'build todo app', description: 'for trello card', priority: 'high', complete: false },
        { id: 3, title: 'washing', description: 'clothes', priority: 'medium', complete: true }
      ])
    })
}
