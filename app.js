require('dotenv').config()
const express                     = require('express')
const cors                        = require('cors')
const db                          = require('./config/db.js')
const Loader                      = require('./config/modelsLoader.js')
const routes                      = require('./routes.js')
const { logFnConsole }            = require('./utils/logFunction.js')

const app                         = express()
const httpServer                  = require('http').createServer(app)
const io                          = require('socket.io')(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
    transports: ["polling", "websocket"],
  })



// const socket = io(httpServer, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   },
//   transports: ["websocket", "polling"],
// })
const port = process.env.APP_POR
Loader()

app.use(cors());
app.use(express.json())



db.sync(() => console.log('[CONECTADO] - banco de dados'))

// socket.on('connect', (data) => {
//   // console.log('[CONECTADO]' , data.id);
//   data.on('teste.one', (dado) => {
//     // console.log(`[SOCKET - ${data.id}] - teste.one => `, dado.id)
//     socket.sockets.emit('teste.one', `${dado.id}`)
//     // socket.to(dado.socketId).emit('teste.one', 'Seu id foi recebido')
//   })
//   data.on('disconnect', () => console.log(`[SOCKET - ${data.id}] - DESCONECTADO`))
// })
// ________________________________________________________________

// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
io.on('connection', (socket) => {
  logFnConsole(`[CONEXÃO SOCKET IO] - ID DO SOCKET => ${socket.id}`)

  socket.on('sendM', (dados) => {
    logFnConsole(dados)
    socket.broadcast.emit('receiveM', dados)
  })
})

app.use(routes)

httpServer.listen(port, () => console.log(`[APLICAÇÃO] - rodou aqui na porta ${port}`))

/*
  1 - como integrar sequelize + nextjs + socket io + nginx + pm2
  2 - pesquisar como servir duas aplicações no mesmo server vps nginx dominio subdominio
  3 - 
*/