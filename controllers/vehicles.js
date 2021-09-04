const Vehicle = require("../models/vehicle");



const addVehicle = async (req, res) => {
  const { ano, modelo, placa, cor, UserIdUser } = req.body
  console.log(UserIdUser);
  if(!UserIdUser) {
    return res.json({
      error: 'Usuário dono do veículo não fornecido, favor fornecer o campo: UserIdUser'
    })
  } else {
    Vehicle.findOne({where: {UserIdUser: UserIdUser}}).then(
      async (result) => {
        if (result) { res.json({error: 'Já tem um cadastro de veículo para esse usuário'}) }
        else {
          Vehicle.create({
            ano: ano || "",
            modelo: modelo || "",
            placa: placa || "",
            cor: cor || "",
            UserIdUser: UserIdUser
          }).then((result) => res.json(result))
        }
      }
    )
  }
}



const findVehicleOfIdUser = async (req, res) => {
  const UserIdUser = req.params.UserIdUser
  if(UserIdUser) return res.json({error: 'Usuário dono do veículo não fornecido, favor fornecer o campo: UserIdUser'})
  Vehicle.findOne({where: {UserIdUser: UserIdUser}}).then(
    async (result) => {
      res.json(result)
    }
  )
}



const findAllVehicle = () => Vehicle.findAll().then((result) => res.json({...result}))



module.exports = {
  addVehicle, findVehicleOfIdUser, findAllVehicle
}