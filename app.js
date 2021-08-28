const express     = require('express')
const cors        = require('cors')
const db          = require('./config/db.js')
const Loader      = require('./config/modelsLoader.js')

const app = express()
const port = 3000

Loader()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  return res.json({ teste: 'teste' })
})

db.sync(() => console.log('CONECTADO'))

app.listen(port, () => console.log(`rodou aqui na porta ${port}`))