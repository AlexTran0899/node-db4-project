
exports.seed = function(knex) {
  return knex('recipes').insert([   
    { recipe_name: 'liquid culture' },
    { recipe_name: 'grain spawn'}
  ]);
};
