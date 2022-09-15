// M - MODEL

const mongoose = require("mongoose");
const typePokemonEnum = require("../common/enums/pokemonType");

const pokemonDataSchema = new mongoose.Schema(
  {
    pokemonName: {
      type: String,
      min: 2,
      max: 100,
      required: [true, "Insert the name!"],
    },
    birthDay: { type: Date, required: [true, "Insert the date of birth!"] },
    Level: { type: Number, required: [true, "Insert the level!"] },
    HP: { type: Number, required: [true, "Insert the HP!"] },
    typePokemon: {
      type: String,
      uppercase: true,
      enum: [
        typePokemonEnum.FIRE,
        typePokemonEnum.WATER,
        typePokemonEnum.PLANT,
        typePokemonEnum.ELECTRIC,
        typePokemonEnum.DRAGON,
        typePokemonEnum.ROCK,
        typePokemonEnum.ICE,
        typePokemonEnum.DARK,
        typePokemonEnum.BUG,
      ],
      required: [true, "Insert your pokemon!"],
    },
    rare: { type: String, required: [true, "Insert rarity !"] },
    evolutionByStone: { type: Boolean, required: [true, "Can have a evolution by stone!?"] },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { collection: "pokemons" }
);

module.exports = mongoose.model("PokemonData", pokemonDataSchema);