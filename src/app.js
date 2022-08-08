import express from 'express'
import chalk from 'chalk'
import db from "./config/dbConnect.js"
import livros from './models/Livro.js'
import routes from './routes/index.js'

// erro de conexão com o banco
db.on("error", console.log.bind(console, chalk.red("Erro de conexão!")))
// conexão bem sucedida com o banco
db.once("open", ()=>{
    console.log(chalk.green('conexão feita com sucesso!'))
})

const app = express()

app.use(express.json())

routes(app)

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.json(`Livro ${id} removido com sucesso!!!`)
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app