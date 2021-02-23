import { Router } from 'express'
import { sanitizeHTML } from '../utils/sanitizeHtml'
import { CacheControl } from './middlewares/CacheControl'

const router = Router()

router.get('/', CacheControl, async (req, res) => {
    res.render('index.html')
})

router.get('/search', async (req, res) => {
    const query = sanitizeHTML(String(req.query.query))

    return res.render('search.html', {
        query,
    })
})

router.get('/login', async (req, res) => {
    return res.render('login.html')
})

router.get('/register', async (req, res) => {
    return res.render('register.html')
})

router.get('/posts', async (req, res) => {
    return res.render('posts.html')
})

router.get('/post', CacheControl, async (req, res) => {
    return res.render('post.html', {
        blog: {
            name: "DevSec"
        }
    })
})

export { router }