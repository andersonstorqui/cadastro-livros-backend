const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const clientRouter = require('./routes/clientRouter')
const cors = require('cors');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


app.use('/livros', clientRouter)

app.use('/livro', clientRouter)

const corsOptions = {
  origin: 'http://example.com', // Substitua com o domínio que você deseja permitir
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
module.exports = app;