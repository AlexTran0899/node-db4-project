
exports.seed = function(knex) {
  return knex('ingredients').insert([   
    { ingredient_name: 'mycelium', quanity: "lions mane" ,steps_id: 1 },
    { ingredient_name: 'water', quanity: "30 oz jar" ,steps_id: 2 },
    { ingredient_name: 'water1', quanity: "31 oz jar" ,steps_id: 2 },
    { ingredient_name: 'water2', quanity: "32 oz jar" ,steps_id: 2 },
    { ingredient_name: 'time', quanity: "forever" ,steps_id: 3 },
    { ingredient_name: 'popcorn', quanity: "1 bag of popcorn", steps_id: 4}
  ]);
};
