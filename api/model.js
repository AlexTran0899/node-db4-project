const db = require("../data/db-config")

function getRecipeById(id) {
    console.log('inside module', id)
    return db('recipes as r')
    .select("r.*", )
    .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
    .where('r.recipe_id', id)
}

module.exports = {
    getRecipeById
}