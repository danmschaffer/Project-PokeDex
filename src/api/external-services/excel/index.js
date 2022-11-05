const readXlsxFile = require("read-excel-file/node");
//const { getallPokemons } = require("../../controllers/pokemonController");
//const pokemons = require("../../models/pokemons");

const schema = {
    "ID": {
        prop: "id",
        type: Number
    },
    "PokemonName": {
        prop: "pokemonName",
        type: String
    },
    "HP": {
        prop: "hp",
        type: Number
    },
    "Attack": {
        prop: "attack",
        type: Number
    }
}

//const xlsx = await importerFactory.from('./my-awesome-books.xlsx');
//const books: Array<Book> = xlsx.getAllItems<Book>(config.books); 
let pokemons = []
const file = "src/api/external-services/excel/data/pokemon_data.xlsx"
module.exports = async () => {
    await readXlsxFile(file, { schema }).then(({ rows, errors }) => {
        console.log(rows)
        pokemons = rows.map(row => {

            row.pokemonName = row.pokemonName
            row.birthDay = "04/10/2002"
            row.level = 1
            row.hp = row.hp
            row.attack = row.attack
            return row
        })
        console.log(pokemons)
    })
    return pokemons
}

/*
pokemonName: {
      type: String,
      min: 2,
      max: 100,
      required: [true, "Insert the name!"],
    },
    birthDay: { type: Date, required: [true, "Insert the date of birth!"] },
    level: { type: Number, required: [true, "Insert the level!"] },
    hp: { type: Number, required: [true, "Insert the HP!"] },
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
    typeStone: {
      type: String,
      uppercase: true,
      enum: [
          typeStoneEnum.FIRE_STONE,
          typeStoneEnum.WATER_STONE,
          typeStoneEnum.PLANT_STONE,
          typeStoneEnum.THUNDER_STONE,
          typeStoneEnum.MOON_STONE,
          typeStoneEnum.NO_EVOLUTION,
        ],
      required: [true, "Insert pokemon's stone"],
    },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  */
/*const datapokemons = await importerFactory.from('data/pokemon_data.xlsx');

rows.maps(mapPokemons);

function mapPokemons(item) {

    return [item.ID,item.PokemonName,item.HP,item.Attack].join(" ")
}

   

exports.createPokemons = async function (req, res, next) {
    let importExcel = new pokemons({
        
    });
    const pokemonsCreated = await pokemons.save();
  
    if (pokemonsCreated)
      res.send({ success: true, res: "Pokemon created!", status: 200 });
  };
*/
/*
exports.createPokemon = async function (req, res, next) {
  let pokemon = new Pokemon({
    pokemonName: req.body.pokemonName,
    typePokemon: req.body.typePokemon,
    birthDay: req.body.birthDay,
    level: req.body.level,
    hp: req.body.hp,
    rare: req.body.rare,
    evolutionByStone : req.body.evolutionByStone,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  const pokemonCreated = await pokemon.save();

  if (pokemonCreated)
    res.send({ success: true, res: "Pokemon created!", status: 200 });
};*/
