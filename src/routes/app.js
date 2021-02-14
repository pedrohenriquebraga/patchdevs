const express = require('express')
const routes = express.Router()
const sanitizeHTML = require('../../utils/sanitizeHtml')
const CacheControl = require('./middlewares/CacheControl')

routes.get('/', CacheControl, async (req, res) => {
    res.render('index.html')
})

routes.get('/search', async (req, res) => {
    const query = sanitizeHTML(req.query.query)

    return res.render('search.html', {
        query,
    })
})

routes.get('/login', async (req, res) => {
    return res.render('login.html')
})

routes.get('/register', async (req, res) => {
    return res.render('register.html')
})

routes.get('/posts', async (req, res) => {
    return res.render('posts.html')
})

routes.get('/post', CacheControl, async (req, res) => {
    return res.render('post.html', {
        blog: {
            name: "DevSec"
        }
    })
})

module.exports = routes