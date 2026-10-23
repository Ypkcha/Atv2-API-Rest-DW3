// MODEL DE SISTEMAS DE RPG
// Importando o mongoose
import mongoose from "mongoose";

// Schema para documento aninhado (descriptions)
const descriptionSchema = new mongoose.Schema({
    genre: String,
    diceType: String,
    rating: String
});

// Criando o schema de systems
const systemSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema
});

const system = mongoose.model('system', systemSchema)

export default system;