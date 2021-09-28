const Restaurant = require("../models/restaurant");
const User = require("../models/user");
const crypto = require("crypto")

/*
  Gerar o código usando crypto de 8 digitos conforme a rota inicial mostra no exemplo
  verificar se o código existe para outro restaurante e se existir gerar outro e verificar de novo
  salvar como code no campo code
*/

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
          const aCodeR = () => {
            let codeRaw = crypto.randomBytes(4).toString('hex').toUpperCase()
            Restaurant.findOne({where: {code: codeRaw}}).then(
              (resultado) => { if (resultado) { return aCodeR() } }
            )
            return codeRaw
          }
          const codeR = aCodeR()
          Restaurant.create({
            nomeRestaurant: nomeRestaurant,   socialReason: socialReason,
            cnpj: cnpj,                       tel1: tel1,
            rua: rua,                         numero: numero,
            obs: obs,                         bairro: bairro,
            cidade: cidade,                   estado: estado,
            cep: cep,                         UserIdUser: userIdUser,
            code: codeR
          }).then((result) => res.json(result))
        } else { 
          res.json({error: 'Usuário não existe para ter um restaurante para representar, favor cadastrar um usuário'})
        }
      }
    )
  }
}

const findRestaurantByCode = (req, res) => {
  const code = req.params.code

  Restaurant.findOne({where: {code: code}}).then(
    (result) => {
      result ? 
        res.json({
          idRestaurant: result.idRestaurant,
          nomeRestaurant: result.nomeRestaurant,
          code: code,
        }) :
        res.json({error: 'Código Inválido!'})
    }
  )
}
// 
// const findOneRestaurant = async (req, res) => {
//   const { idRestaurant } = req.body
//   Restaurant.findByPk(idRestaurant).then((result) => {
//     if(!result) { res.json({error: 'restaurante fornecido não está cadastrado'}) }
//     else {

//     }
//     res.json(result)
//   })
// }

module.exports = {
  addRestaurant,
  findAllRestaurant,
  findRestaurantByCode,
}