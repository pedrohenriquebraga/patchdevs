const path = require('path')
const cors = require('cors')
const appRoutes = require('./routes/app')
const helmet = require('helmet')
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

nunjucks.configure(path.join(__dirname, "views"), {
    autoescape: true,
    noCache: true,
    express: app
})

app.use(helmet())
app.use(cors({}))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(appRoutes)

app.listen(3000, () => console.log('Servidor na porta 3000'))