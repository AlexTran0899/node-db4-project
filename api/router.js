const express = require('express');
const model = require('./model');

const router = express.Router();

router.get("/:recipe_id", (req, res, next) => {
    console.log(req.params.recipe_id)
    model.getRecipeById(req.params.recipe_id)
    .then(data => {
        res.json(data)
    })
    .catch(next)
})

module.exports = router;