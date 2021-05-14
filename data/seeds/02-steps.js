
exports.seed = function(knex) {
  return knex('steps').insert([   
    { step_instruction: 'buy mycelium', step_number: 1 ,recipe_id: 1 },
    { step_instruction: 'innoculate jar', step_number: 2 ,recipe_id: 1 },
    { step_instruction: 'wait 3 weeks', step_number: 3 ,recipe_id: 1 },
    { step_instruction: 'buy popcorn', step_number: 1, recipe_id: 2}
  ]);
};
