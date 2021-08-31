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
    methods: ["GET", "POST"]
  },
  transports: ["polling", "websocket"],
})
const port = process.env.APP_POR

app.use(cors());


Loader()
app.use(express.json())
app.use(routes)

db.sync(() => console.log('[CONECTADO] - banco de dados'))

socket.on('connect', (data) => {
  console.log('[CONECTADO]' , data.id);
  data.on('teste.one', (dado) => {
    console.log(`[SOCKET - ${data.id}] - teste.one => `, dado)
    socket.sockets.emit('teste.one', `[SERVER] - user => ${dado.id}`)
  })
  
  data.on('disconnect', () => console.log(`[SOCKET - ${data.id}] - DESCONECTADO`))
})



httpServer.listen(port, () => console.log(`[APLICAÇÃO] - rodou aqui na porta ${port}`))

/*
  1 - como integrar sequelize + nextjs + socket io + nginx + pm2
  2 - pesquisar como servir duas aplicações no mesmo server vps nginx dominio subdominio
  3 - 
*/