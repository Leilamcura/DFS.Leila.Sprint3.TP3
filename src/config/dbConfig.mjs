// Sprint3 TP3 Leila Margarita Cura
// Configuracion de la conexion centralizada a MongoDB dbConfig.mjs
import mongoose from 'mongoose'

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-06:grupo06@cursadanodejs.ls9ii.mongodb.net/Node-js');
            console.log('Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        ProcessingInstruction.exit(1);
    }
}