const path = require('path')
const cors = require('cors')
const appRoutes = require('./routes/app')
const helmet = require('helmet')
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const compression = require('compression')

nunjucks.configure(path.join(__dirname, "views"), {
    autoescape: true,
    noCache: true,
    express: app
})

app.use(helmet({
    contentSecurityPolicy: false
}))
app.use(cors({}))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(compression({
    level: 9
}))
app.use(appRoutes)

app.listen(process.env.PORT || 3000, () => console.log(`Servidor na porta ${process.env.PORT || 3000}`))