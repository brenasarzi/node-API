import mongoose from "mongoose";

mongoose.connect('mongodb+srv://brenasarzi:malboro231@livraria.apcy6lz.mongodb.net/livraria-node')

let db = mongoose.connection

export default db