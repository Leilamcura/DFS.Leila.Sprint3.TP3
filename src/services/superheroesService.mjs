// Implementa la lógica de negocio, utilizando los métodos del repositorio para recuperar, 
// filtrar y buscar datos de superheroes

import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

// Obtener Superheroe por ID
export async function obtenerSuperheroePorId(id) {
    try {
        return await superHeroRepository.obtenerPorId(id);
    } catch (error) {
        console.error("Ocurrió un error al obtenerSuperheroePorId:", error);
        throw error;
    }
}

// Obtener todos los Superheroes
export async function obtenerTodosLosSuperheroes() {
    try {
        return await superHeroRepository.obtenerTodos();
    } catch (error) {
        console.error("Ocurrió un error al obtenerTodosLosSuperheroes:", error);
        throw error;
    }
}

// Buscar superheroe por atributo
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    try {
        return await superHeroRepository.buscarPorAtributo(atributo, valor);
    } catch (error) {
        console.error("Ocurrió un error al buscarSuperheroesPorAtributo:", error);
        throw error;
    }
}

// Buscar superheroes mayores de 30 del planeta tierra con al menos 2 poderes
export async function obtenerSuperheroesMayoresDe30() {
    try {
        return await superHeroRepository.obtenerMayoresDe30ConCriterios();
    } catch (error) {
        console.error("Ocurrió un error al obtenerSuperheroesMayoresDe30:", error);
        throw error;
    }
}

// Crear Superheroe
export async function crearSuperheroeService(datos) {
    try {
        return await superHeroRepository.crearSuperheroe(datos);
    } catch (error) {
        console.error("Ocurrió un error al crearSuperheroeService:", error);
        throw error;
    }
}

// Editar/actualizar Superheroe
export async function editarSuperheroeService(id, datos) {
    try {
        return await superHeroRepository.editarSuperheroe(id, datos);
    } catch (error) {
        console.error("Ocurrió un error al editarSuperheroeService:", error);
        throw error;
    }
}

// Eliminar por ID

export async function eliminarSuperheroePorIdService(id) {
    try {
        return await superHeroRepository.eliminarSuperheroePorId(id);
    } catch (error) {
        console.error("Ocurrió un error al eliminarSuperheroePorIdService:", error);
        throw error;
    }
}

// Eliminar por nombre 

export async function eliminarSuperheroePorNombreService(nombreSuperheroe) {
    try {
        return await superHeroRepository.eliminarSuperheroePorNombre(nombreSuperheroe);
    } catch (error) {
        console.error("Ocurrió un error al eliminarSuperheroePorNombreService:", error);
        throw error;
    }
}

// Agregar superheroe service
export async function agregarSuperheroeService(datos) {
    try {
        return await superHeroRepository.crearSuperheroe(datos);
    } catch (error) {
        console.error("Error en agregarSuperheroeService:", error);
        throw error;
    }
}

//Actualizar

export async function actualizarSuperheroe(id, nuevosDatos) {
        return await superHeroRepository.actualizarSuperheroe(id, nuevosDatos);
    }