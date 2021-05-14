const db = require("../data/db-config")

async function getRecipeById(id) {
    console.log('inside module', id)
    const data = await db('recipes as r')
        .select("r.*", "st.*", "i.*")
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .leftJoin('ingredients as i', 'st.steps_id', 'i.steps_id')
        .where('r.recipe_id', id)
        .orderBy('step_number', 'asc')
    const result = {
        recipe_id: data[0].recipe_id,
        recipe_name: data[0].recipe_name,
        create_at: data[0].created_at,
        steps: data.map(stuff => {
            console.log(stuff)
            const morestuff = {
                step_number: stuff.step_number,
                step_instructions: stuff.step_instruction,
            }
            return morestuff
        })
    }
    console.log(result)
    return data
    return result
}

module.exports = {
    getRecipeById
}