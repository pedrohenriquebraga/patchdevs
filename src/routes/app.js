const express = require('express')
const routes = express.Router()

routes.get('/', async (req, res) => {
    res.render('index.html')
})

routes.get('/login', async (req, res) => {
    res.render('login.html')
})

module.exports = routes