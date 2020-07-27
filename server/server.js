const express = require('express')
const connData = require('./data/conndata.json')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests


// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : connData.host,
    user : connData.user,
    password : connData.password,
    database : connData.database,
    port : connData.port,
    searchPath: connData.searchPath,
    debug: true,
  }
});

// Controllers - aka, the db queries
const main = require('./controllers/main')

// App
const app = express()

// App Middleware
const whitelist = ['http://localhost:8001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
app.get('/crud', (req, res) => main.getTableData(req, res, db))
app.get('/view', (req, res) => main.getView(req, res, db))
// app.post('/crud', (req, res) => main.postTableData(req, res, db))
// app.put('/crud', (req, res) => main.putTableData(req, res, db))
// app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 3010, () => {
  console.log(`app is running on port ${process.env.PORT || 3010}`)
})