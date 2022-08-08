import livros from "../models/Livro.js";

class livroController{

    // Listando os livros e passando o status 200(carregado com sucesso!)
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    // Listar um livro pelo id inserido
    static listarLivroPorId = (req, res) => {
        const id = req.params.id
        livros.findById(id, (err, livros) => {
            if(err){
                res.status(400).send({messege: `${err.messege} - Id do livro não localizado.`})
            } else {
                res.status(200).send(livros)
            }
        })
    }

    // Cadastrando um livro
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)
        livro.save((err) => {
            if(err){
                res.status(500).send({messege: `${err.messege} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON)
            }
        })
    }

    // Atualizando um livro pelo id
    static atualizarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({messege: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({messege: `Erro ${err.messege}`})
            }
        })
    }

}

export default livroController