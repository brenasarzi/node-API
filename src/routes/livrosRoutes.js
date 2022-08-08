import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router()

// Listagem no método GET
router
    .get('/livros', livroController.listarLivros)

export default router