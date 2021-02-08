const express = require('express')
const routes = express.Router()

routes.get('/', async (req, res) => {
    res.render('index.html')
})

routes.get('/login', async (req, res) => {
    res.render('login.html')
})

routes.get('/register', async (req, res) => {
    res.render('register.html')
})

module.exports = routes