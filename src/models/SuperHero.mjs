// Definición del modelo de datos, estructura y reglas de validación para los documentos almacenados en MongoDB
import mongoose from 'mongoose'

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, required: true},
    nombreReal: { type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: [String],
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: [String],
    createdAT: {type: Date, default: Date.now}
});
const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-06');
export default superHero