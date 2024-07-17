const livros = [
  {
    id: '1',
    titulo: 'codigo limpo',
    numeroPag: '350',
    isbn: '123456',
    editora: 'folha de sao paulo'
  },
  {
    id: '2',
    titulo: 'codigo limpo v2',
    numeroPag: '150',
    isbn: '13465312',
    editora: 'folha de sao paulo'
  },
  {
    id: '3',
    titulo: 'codigo limpo v3',
    numeroPag: '250',
    isbn: '654321',
    editora: 'folha de sao paulo'
  },
]


const readClient = (req, res) => {
  console.log(livros) 
  res.status(200).send(livros)
}


const readOneClient = ( req, res )  => {
  let id = req.params.id
  const livro = livros.find((item) => item.id == Number(id))

  if(livro){
    res.status(200).send(livro)
  }
  res.status(404).send('Id não encontrado')
}

const createClient = (req,res) => {
  let body = req.body
  
  if( Object.keys(body).length > 0){
    livros.push(body)
    res.status(201).send(livros)
  }else{
    res.status(406).send('Não foi possivel adicionar este livro')
  }
}

const updateClient = (req, res) => {
  let id = req.params.id
  const indice = livros.findIndex((item) => item.id == Number(id))

  livros[indice] = req.body
  
  res.status(201).send('Livrs atualizado com sucesso')
  
}

const deleteClient = (req, res) => {
  let id = req.params.id
  const indice = livros.findIndex((item) => item.id == Number(id))

  livros.splice(indice, 1)

  res.status(200).send('Foi excluido com sucesso')
  
}


module.exports = {
  readClient,
  readOneClient,
  createClient,
  updateClient,
  deleteClient
}