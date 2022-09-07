// M - MODEL

const mongoose = require('mongoose')
// const userTypesEnum = require('../common/enums/userTypes')

const userDataSchema = new mongoose.Schema({
  email: { type: String, required: [true, 'Informe o email!'] },
  password: { type: String, min: 1, max: 30, required: [true, 'Informe a senha!'] },
  name: { type: String, min: 2, max: 100, required: [true, 'Informe o nome!'] },
}, { collection: 'users' })

module.exports = mongoose.model('UserData', userDataSchema)