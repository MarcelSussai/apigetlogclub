require('dotenv').config()
const express     = require('express')
const cors        = require('cors')
const io          = require('socket.io')
const db          = require('./config/db.js')
const Loader      = require('./config/modelsLoader.js')
const routes      = require('./routes.js')

const app = express()
const httpServer  = require('http').createServer(app)
const socket = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  }
})
const port = process.env.APP_POR

app.use(cors());

socket.on('connect', data => {
  console.log(data.id);
})

Loader()
app.use(express.json())
app.use(routes)

db.sync(() => console.log('[CONECTADO] - banco de dados'))

httpServer.listen(port, () => console.log(`[APLICAÇÃO] - rodou aqui na porta ${port}`))