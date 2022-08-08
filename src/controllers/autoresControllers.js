import autores from "../models/Autor.js";

class AutorController{

    // Listando os autores e passando o status 200(carregado com sucesso!)
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    // Listar um Autor pelo id inserido
    static listarAutorPorId = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({messege: `${err.messege} - Id do Autor não localizado.`})
            } else {
                res.status(200).send(autores)
            }
        })
    }

    // Cadastrando um Autor
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save((err) => {
            if(err){
                res.status(500).send({messege: `${err.messege} - falha ao cadastrar Autor.`})
            } else {
                res.status(201).send(autor.toJSON)
            }
        })
    }

    // Atualizando um Autor pelo id
    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({messege: 'Autor atualizado com sucesso!'})
            } else {
                res.status(500).send({messege: `Erro ${err.messege}`})
            }
        })
    }

    // Excluir um Autor pelo id
    static excluirAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({messege: 'Autor removido com sucesso!'})
            } else {
                res.status(500).send({messege: `${err.messege} - Esse Autor não existe`})
            }
        })
    }

}

export default AutorController
