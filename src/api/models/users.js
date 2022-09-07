// M - MODEL

const mongoose = require('mongoose')
// const userTypesEnum = require('../common/enums/firstpokemon')

// const userDataSchema = new mongoose.Schema({
//   name: { type: String, min: 2, max: 100, required: [true, 'Insert a name!'] },
//   password: { type: String, min: 1, max: 30, required: [true, 'Insert a password!'] },
//   birthDay: { type: Date, required: [true, 'Insert your date of birth!'] },
//   FirstPokemon: { type: String, uppercase: true, enum: [firstpokemonEnum.Fire, firstpokemonEnum.Water, firstpokemonEnum.Plant], required: [true, 'Choose your first pokemon!'] },
//   badges: { type: Array, default: [], required: false },
//   totalCoins: { type: Number, min: 0, required: false, default: 0 },
//   createdAt: { type: Date, required: true },
//   updatedAt: { type: Date, required: true }
// }, { collection: 'user_data' })

// module.exports = mongoose.model('UserData', userDataSchema)