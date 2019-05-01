
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web1'},
        {name: 'Web2'},
        {name: 'Web3'},
        {name: 'Web4'},
        {name: 'Web5'},
        {name: 'Web6'},
        {name: 'Web7'},
        {name: 'Web8'},
        {name: 'Web9'},
        {name: 'Web10'}
      ]);
    });
};
