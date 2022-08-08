import livros from "../models/Livro.js";

// Listando os livros e passando o status 200(carregado com sucesso!)
class livroController{
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

export default livroController