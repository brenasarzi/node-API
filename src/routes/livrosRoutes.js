import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router()

// Rotas indicando o método
router
    .get('/livros', livroController.listarLivros)
    .get('/livros/:id', livroController.listarLivroPorId)
    .post('/livros', livroController.cadastrarLivro)
    .put('/livros/:id', livroController.atualizarLivro)

export default router