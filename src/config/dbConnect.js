import mongoose from "mongoose";

// Conexão com o banco de dados mongodb
mongoose.connect('mongodb+srv://brenasarzi:malboro231@livraria.apcy6lz.mongodb.net/livraria-node')

// variavél da conexão
let db = mongoose.connection

export default db