const express = require('express')
const cors = require('cors')

const searchRoute = require('./app/routes/searchRoute')


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(searchRoute)

module.exports = app