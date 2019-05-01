
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Deric', cohort_id: 1},
        {name: 'Meldric', cohort_id: 1},
        {name: 'Kanukai', cohort_id: 2},
        {name: 'Jordan', cohort_id: 5},
        {name: 'Solaire', cohort_id: 3},
        {name: 'Isabel', cohort_id: 3},
        {name: 'Gerardo', cohort_id: 3},
        {name: 'Meha', cohort_id: 4},
        {name: 'Bianca', cohort_id: 4},
        {name: 'Gabby', cohort_id: 4},
        {name: 'Maame', cohort_id: 4},
        {name: 'Emerald', cohort_id: 2},
        {name: 'Denise', cohort_id: 5},
        {name: 'Michael', cohort_id: 6},
        {name: 'Akanele', cohort_id: 6},
        {name: 'Nnenna', cohort_id: 6},
        {name: 'Nma', cohort_id: 6},
      ]);
    });
};
