
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.string('recipe_name', 255).notNullable()
        tbl.date('created_at').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('steps', tbl => {
        tbl.increments('steps_id')
        tbl.string("step_instruction")
        tbl.integer("step_number")
        tbl.integer("recipe_id")
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredients_id')
        tbl.string("ingredient_name")
        tbl.string("quanity")
        tbl.integer("steps_id")
        .references("steps_id")
        .inTable("steps")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
};
