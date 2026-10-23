// Importar o Express
import express from "express";
// Importar o Mongoose
import mongoose from "mongoose"
// Importar o Model de system
import system from "./models/Systems.js"
// Importar o Model de Usuário
import User from "./models/Users.js"
// Importar as rotas (endpoints)
import systemRoutes from './routes/systemRoutes.js'
import userRoutes from "./routes/userRoutes.js";

// Carregando Express
const app = express();

// Configurações do Express
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Carregando as rotas de systems
app.use('/', systemRoutes)
// Carregando as rotas de usuários
app.use('/', userRoutes)

// Iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithesystems_aninhado")

// Iniciando o servidor da API
const port = process.env.PORT || 8080;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta http://localhost:" + port);
    }
});