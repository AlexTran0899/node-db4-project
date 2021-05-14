
exports.seed = function(knex) {
  return knex('steps').insert([   
    { step_instruction: 'buy mycelium', step_number: 1 ,recipe_id: 1 },
    { step_instruction: 'buy popcorn', step_number: 1, recipe_id: 2}
  ]);
};
