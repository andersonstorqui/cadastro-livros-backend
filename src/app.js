const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const clientRouter = require('./routes/clientRouter')

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/livros', clientRouter)

app.use('/livro', clientRouter)


module.exports = app;