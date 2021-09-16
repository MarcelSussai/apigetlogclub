const Restaurant = require("../models/restaurant");
const User = require("../models/user");



const findAllRestaurant = (req, res) => Restaurant.findAll().then((result) => res.json({...result}))

const addRestaurant = async (req, res) => {
  const {
    nomeRestaurant, socialReason, cnpj, tel1, rua, numero,
    obs, bairro, cidade, estado, cep, userIdUser
  } = req.body

  if(!userIdUser) {
    return res.json({
      error: 'Usuário representante do restaurante não fornecido, favor fornecer o campo: UserIdUser'
    })
  } else {
    User.findOne({where: {idUser: userIdUser}}).then(
      (ruser) => {
        if (ruser) {
          Restaurant.create({
            nomeRestaurant: nomeRestaurant,   socialReason: socialReason,
            cnpj: cnpj,                       tel1: tel1,
            rua: rua,                         numero: numero,
            obs: obs,                         bairro: bairro,
            cidade: cidade,                   estado: estado,
            cep: cep,                         UserIdUser: userIdUser,
          }).then((result) => res.json(result))
        } else { 
          res.json({error: 'Usuário não existe para ter um restaurante para representar, favor cadastrar um usuário'})
        }
      }
    )
  }
}

module.exports = {
  addRestaurant,
  findAllRestaurant,
}