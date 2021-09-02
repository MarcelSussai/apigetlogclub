const { DataTypes }     = require('sequelize')
const db                = require('../config/db.js')
// const AdressUser = require('./adressUser.js')

const User = db.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    alowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    uniqueOne: true
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tel1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tel2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nasc: {
    type: DataTypes.DATE,
    allowNull: true
  },
  admin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rua: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  obs: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    alowNull: false,
  },
})

/*
  PADRÃO DO ADMIN
  string
  formato:

    # administrador geral, diego e quem ele permitir
      formato:
        [ADMIN] - 00000000
        [ADMIN] - 00000001
        ...
      permissões:
        todas
    # desenvolvedor, no caso eu e/ou quem for o dev do projeto
      formato:
        [DEV] - 00000000
        [DEV] - 00000001
        ...
      permissões:
        todas

    # Representante do restaurante, 
    para saber qual restaurante, pesquisar o id na 
    chave estrangeira do restaurante
      formato:
        [RESTAURANTE] - 00000000
        [RESTAURANTE] - 00000001
        ...
      permissões:
        administrar as páginas de exibição para o cliente
        dar baixa e continuidade em pedidos daquele restaurante
        acesso as informações relacionadas a conta dele
        e do restaurante, editar, adicionar filial
        aceitar pedido do cliente final
        preparar pedido, enviar pedido e concluir pedido

    # Entregadores
      formato:
        [ENTREGADOR] - [GETLOGCLUB] - 00000001
        [ENTREGADOR] - [RESTAURANTE] - 00000002
        ...
      permissões:
        Aceitar, recusar, receber pedidos
        acesso a conta dele de quanto receber
        de quando receber, acesso ao valor e transferir valor
        para a conta pessoal

*/

console.log(User === db.models.User)

module.exports = User