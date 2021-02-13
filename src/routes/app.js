const express = require('express')
const routes = express.Router()
const sanitizeHTML = require('../../utils/sanitizeHtml')

routes.get('/', async (req, res) => {
    res.render('index.html')
})

routes.get('/search', async (req, res) => {
    const query = sanitizeHTML(req.query.query)

    return res.render('search.html', {
        query,
    })
})

routes.get('/login', async (req, res) => {
    res.render('login.html')
})

routes.get('/register', async (req, res) => {
    res.render('register.html')
})

routes.get('/posts', async (req, res) => {
    res.render('posts.html')
})

module.exports = routes