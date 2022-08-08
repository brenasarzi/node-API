import livros from "../models/Livro.js";

class livroController{

    // Listando os livros e passando o status 200(carregado com sucesso!)
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
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

}

export default livroController