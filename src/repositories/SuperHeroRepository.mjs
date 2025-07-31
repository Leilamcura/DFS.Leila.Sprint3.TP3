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

  // async editarSuperheroe(nombreSuperheroe, datos) {
  //   try {
  //     //  findOneAndUpdate con { new: true } para obtener el documento actualizado
  //     return await SuperHero.findOneAndUpdate(
  //       { nombreSuperHeroe: nombreSuperheroe }, // Filtro por nombreSuperheroe
  //       { $set: datos }, // Datos a actualizar
  //       { new: true } // Devuelve el documento actualizado
  //     );
  //   } catch (error) {
  //     console.error("Error al editar el superhéroe:", error);
  //     throw error;
  //   }
  // }
          async editarSuperheroe(id, datos) {
        /* updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado
        y findByIdAndUpdate() devuelve el documento actualizado */
            const heroeActualizado = await SuperHero.findByIdAndUpdate(id, datos, { new: true });
            console.log(heroeActualizado);
            return heroeActualizado;
            
        }

// Actuzliar
// async actualizarSuperheroe(id,datosActualizados) {
//         const {nombreSuperHeroe,nombreReal,edad,planetaOrigen,debilidad,poderes,aliados,enemigos,creador} = datosActualizados;
//         const superheroe = await SuperHero.findOneAndUpdate(

//         { _id: id }, 

//         { $set: { nombreSuperHeroe:nombreSuperHeroe,nombreReal:nombreReal,edad:edad,planetaOrigen:planetaOrigen,debilidad:debilidad,poderes:poderes,aliados:aliados,enemigos:enemigos,creador:creador} },

//         { new: true }

//       )

//       return superheroe; 
// }

async editarSuperheroeById(id, datos) {
    try {
      // Usamos findOneAndUpdate con { new: true } para obtener el documento actualizado
      return await SuperHero.findByIdAndUpdate(
        // Filtro por id
        { _id: id }, 
        // Datos a actualizar
        { $set: datos }, 
        // Devuelve el documento actualizado
        { new: true } 
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
