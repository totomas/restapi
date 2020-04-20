const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const projects = require('../proyectos.json')
console.log(projects);

router.get('/', (req, res) => {
    res.json(projects);
});




module.exports = router