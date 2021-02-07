const express = require('express')
const routes = express.Router()

routes.get('/', async (req, res) => {
    res.render('index.html')
})

module.exports = routes