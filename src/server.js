const path = require('path')
const cors = require('cors')
const appRoutes = require('./routes/app')
const helmet = require('helmet')
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const serverStatic = require('serve-static')
const compression = require('compression')

nunjucks.configure(path.join(__dirname, "views"), {
    autoescape: true,
    noCache: true,
    express: app
})

app.use(helmet({
    contentSecurityPolicy: false,
    hsts: {
        maxAge: 3600,
        preload: true,
        includeSubDomains: true
    }
}))
app.use(cors({}))
app.use(serverStatic(path.join(__dirname, '..', 'public'), {
    cacheControl: true,
    maxAge: "5m",
    dotfiles: "ignore"
}))
app.use(compression({level: 7}))
app.use(appRoutes)

app.listen(process.env.PORT || 3000, () => console.log(`Servidor na porta ${process.env.PORT || 3000}`))