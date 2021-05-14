
exports.seed = function(knex) {
  return knex('ingredients').insert([   
    { ingredient_name: 'mycelium', quanity: "lions mane" ,steps_id: 1 },
    { ingredient_name: 'popcorn', quanity: "1 bag of popcorn", steps_id: 2}
  ]);
};
