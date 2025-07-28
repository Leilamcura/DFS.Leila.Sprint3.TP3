// Implementa los metodos definidos en la interfaz
// interactúa directa# con MongoDB a traves de Mongoose para realizar operaciones de datos

import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }
  async obtenerTodos() {
    return await SuperHero.find({});
  }
  async buscarPorAtributo(atributo, valor) {
    return await SuperHero.find({ [atributo]: valor });
  }
    async obtenerMayoresDe30ConCriterios() {
    return await SuperHero.find({
      edad: { $gt: 30 },
      planetaOrigen: "Tierra",
      $expr: { $gte: [{ $size: "$poderes" }, 2] },
    });
  }
  // crear Superheroe
  async crearSuperheroe(datos) {
    try {
      return await SuperHero.create(datos);
    } catch (error) {
      console.error("Error al crear el superheroe:", error);
      throw error;
    }
  }
  // editar

  async editarSuperheroe(nombreSuperheroe, datos) {
    try {
      //  findOneAndUpdate con { new: true } para obtener el documento actualizado
      return await SuperHero.findOneAndUpdate(
        { nombreSuperHeroe: nombreSuperheroe }, // Filtro por nombreSuperheroe
        { $set: datos }, // Datos a actualizar
        { new: true } // Devuelve el documento actualizado
      );
    } catch (error) {
      console.error("Error al editar el superhéroe:", error);
      throw error;
    }
  }


// Eliminar por ID

async eliminarSuperheroePorId(id) {
    try {
      // Usamos findByIdAndDelete para obtener el documento actualizado
      return await SuperHero.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error al eliminar el superhéroe por id:", error);
      throw error;
    }
  }

// Eliminar por nombre
async eliminarSuperheroePorNombre(nombreSuperheroe) {
    try {
      // Usamos findByIdAndDelete para obtener el documento actualizado
      return await SuperHero.findOneAndDelete(
        { nombreSuperHeroe: nombreSuperheroe },
      );
    } catch (error) {
      console.error("Error al eliminar el superhéroe por nombre:", error);
      throw error;
    }
  }
}
export default new SuperHeroRepository();
