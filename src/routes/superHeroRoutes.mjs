// Define los endpoints y mapea cada uno a su respectivo controlador
// Define las rutas necesarias para cada operación del controlador

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    //crearSuperheroeController,
    editarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController,
    agregarSuperheroeController,
    formActualizarHeroeController
} from '../controllers/superheroesController.mjs';

// Para cumplir con los requerimientos del Sprint3 TP2 validar y sanitizar
import { heroesValidationRules } from "../middlewares/validationRules.mjs";
import { heroesHandleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller); 
router.get('/heroes/:id', obtenerSuperheroePorIdController); 
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);  
router.get('/heroes', obtenerTodosLosSuperheroesController);

// Agregado de middlewares de validacion y manejo de errores solicitados en Trello para Sp3TP2
// pausado router.post('/heroes/', heroesValidationRules(), heroesHandleValidationErrors, crearSuperheroeController);
// pausado router.put('/heroes/editar/:nombreSuperheroe', heroesValidationRules(), heroesHandleValidationErrors, editarSuperheroeController);
// --

// Agregado de requerimiento Sprint3 TP3: Definir una ruta POST /heroes/agregar en superheroesRoutes.mjs.
router.post('/heroes/agregar', heroesValidationRules(), heroesHandleValidationErrors, agregarSuperheroeController)

// Agregar una ruta PUT /heroes/:id/editar en superheroesRoutes.mjs
router.put('/heroes/:id', heroesValidationRules(), heroesHandleValidationErrors, editarSuperheroeController);


router.get('/formEditarHeroe/:id', formActualizarHeroeController);

// Agregado de requerimiento Sprint3 TP3: Formularios
// Agregar
router.get('/formAgregarHeroe', (req, res) => {
    res.render('addSuperheroe'); 
});
// Editar
// router.get('/formulario-editar', (req, res) => {
//     res.render('editSuperheroe'); 
// });




// router.get("/form-agregar-heroe", (req, res) => {
//   res.render("addSuperheroe")
// })
//router.get('/formAgregarHero',formAgregarHeroController);
// router.get('/formEditarHero/:id',formActualizarHeroeController);
// router.get('/confirmarEliminar/:id', confirmarEliminacionController);



router.delete('/heroes/eliminar/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/eliminar-nombre/:nombreSuperheroe', eliminarSuperheroePorNombreController);

export default router;


