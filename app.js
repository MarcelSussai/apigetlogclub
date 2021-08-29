const express     = require('express')
const cors        = require('cors')
const db          = require('./config/db.js')
const Loader      = require('./config/modelsLoader.js')
const routes      = require('./routes.js')

const app = express()
const port = 3001

Loader()
app.use(cors())
app.use(express.json())
app.use(routes)

db.sync(() => console.log('[CONECTADO] - banco de dados'))

app.listen(port, () => console.log(`rodou aqui na porta ${port}`))