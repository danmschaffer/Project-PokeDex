// M - MODEL

const mongoose = require('mongoose')
const typePokemonEnum = require('../common/enums/typePokemon')

const userDataSchema = new mongoose.Schema({
  name: { type: String, min: 2, max: 100, required: [true, 'Insert a name!'] },
  password: { type: String, min: 1, max: 30, required: [true, 'Insert a password!'] },
  birthDay: { type: Date, required: [true, 'Insert your date of birth!'] },
  firstPokemon: { type: String, uppercase: true, enum: [typePokemonEnum.FIRE, typePokemonEnum.WATER, typePokemonEnum.PLANT], required: [true, 'Choose your first pokemon!'] },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
}, { collection: 'users' })

module.exports = mongoose.model('UserData', userDataSchema)