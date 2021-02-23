import { join } from 'path'
import cors from 'cors'
import { router } from './routes/app'
import helmet from 'helmet'
import express from 'express'
import nunjucks from 'nunjucks'
import serverStatic from 'serve-static'
import compression from 'compression'

const app = express()

nunjucks.configure(join(__dirname, "views"), {
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
app.use(serverStatic(join(__dirname, '..', 'public'), {
    cacheControl: true,
    maxAge: "5m",
    dotfiles: "ignore"
}))
app.use(compression({level: 7}))
app.use(router)

app.listen(process.env.PORT || 3000, () => console.log(`Servidor na porta ${process.env.PORT || 3000}`))