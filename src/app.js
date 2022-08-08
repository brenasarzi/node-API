import express from 'express'
import chalk from 'chalk'
import db from "./config/dbConnect.js"
import routes from './routes/index.js'

// erro de conexão com o banco
db.on("error", console.log.bind(console, chalk.red("Erro de conexão!")))
// conexão bem sucedida com o banco
db.once("open", ()=>{
    console.log(chalk.green('conexão feita com sucesso!'))
})

// Utilização do express
const app = express()

app.use(express.json())

// Rotas sendo direcionadas
routes(app)

export default app