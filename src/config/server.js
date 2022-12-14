const port = 3003

const express = require('express')
const bodyParser = require('body-parser')

// Rotas:

const pokedexRoutes = require('./routes')
const app = express()
const allowCors = require('./cors')
const cors = require('cors')
const queryParser = require('express-query-int')

// Body Parser:

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(allowCors)

app.use(cors())
app.use(queryParser())

app.use('/pokedex', pokedexRoutes)

// Servidor:

app.listen(port, () => {
  console.log(`BACK-END is running on port ${port}.`)
})

module.exports = app