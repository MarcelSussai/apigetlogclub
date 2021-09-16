const ImageUser = require("../models/imageUser");
const User = require("../models/user");
const fs = require('fs')

const addImageUser = async (req, res) => {

  const {
    name, b64, type, userIdUser
  } = req.body

  if(!userIdUser) {
    return res.json({
      error: 'Usuário não fornecido, favor fornecer o campo: UserIdUser'
    })
  } else {
    User.findOne({where: {idUser: userIdUser}}).then(
      (ruser) => {
        if (ruser) {
          ImageUser.create({
            tipo: type,
            nomeArquivo: name,
            b64: b64,
            obs: '',
            UserIdUser: userIdUser
          }).then((result) => res.json(result))
        } else { 
          res.json({error: 'Usuário não existe para ter uma imagem, favor cadastrar um usuário'})
        }
      }
    )
  }
}

module.exports = {
  addImageUser,
}