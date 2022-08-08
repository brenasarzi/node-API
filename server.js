import app from './src/app.js'
import chalk from "chalk";

// Porta do servidor
const port = process.env.PORT || 3000

// Mensagem de sucesso no console
app.listen(port, ()=>{
    console.log(chalk.magenta(`Servidor escutando em http://localhost:${port}`))
})
