// Endpoints (rotas) de systems
import express from "express";
const systemRoutes = express.Router();
// Importando o controller
import systemController from "../controllers/systemsController.js";
//  Importando o middleware de Autenticação
import Auth from "../middlewares/Auth.js";

// Endpoint (rota) para listar todos os sistemas
systemRoutes.get("/systems", Auth.Authorization, systemController.getAllSystems);

// Endpoint (rota) para cadastrar um sistema
systemRoutes.post("/systems", Auth.Authorization, systemController.createSystem);

// Endpoint (rota) para deletar um sistema
systemRoutes.delete("/systems/:id", Auth.Authorization, systemController.deleteSystem);

// Endpoint (rota) para alterar um sistema
systemRoutes.put("/systems/:id", Auth.Authorization, systemController.updateSystem);

// Endpoint (rota) para listar um sistema único
systemRoutes.get("/systems/:id", Auth.Authorization, systemController.getOneSystem);

export default systemRoutes;
