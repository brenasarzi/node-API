import express from "express";
import livros from "./livrosRoutes.js";

// Criando as rotas para URI
const routes = (app) => {
    // Quando não houver rotas na uri mostre apenas "Curso de Node"
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Curso de Node"})
    })

    // Use para outras rotas
    app.use(
        express.json(),
        // rota /livros
        livros
    )
}

export default routes