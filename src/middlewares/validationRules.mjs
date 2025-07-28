import { body } from "express-validator";

export const heroesValidationRules = () => [
  body("nombreSuperHeroe")
    .notEmpty() // No vacío
    .withMessage("El nombre del superheroe es requerido, no puede estar vacío")
    .trim() //Elimina espacios
    .isLength({ min: 3 }) // Longitud Min
    .withMessage("El nombre del superheroe debe tener como mínimo 3 caracteres")
    .isLength({ max: 60 }) // Longitud Max
    .withMessage(
      "El nombre del superheroe debe tener como máximo 60 caracteres"
    ),
  ,
  body("nombreReal")
    .notEmpty()
    .withMessage("El nombre real es requerido, no puede estar vacío")
    .trim()
    .isLength({ min: 3 })
    .withMessage("El nombre real debe tener como mínimo 3 caracteres")
    .isLength({ max: 60 })
    .withMessage("El nombre real debe tener como máximo 60 caracteres"),
  body("edad")
    .notEmpty()
    .withMessage("La edad es requerida, no puede estar vacía")
    .trim()
    .isInt({ min: 0 })
    .withMessage("La edad debe ser mayor o igual a 0"),
  body("poderes")
    .notEmpty()
    .withMessage("Poder es requerido, no puede estar vacío")
    .customSanitizer((value) => {
      if (typeof value === "string") {
        return value
          .split(",") // separa los poderes por comas
          .map((p) => p.trim()) // recorre el array y elimina los espacios en blanco al principio y al final de la cadena
          .filter(Boolean); // elimina cadenas vacías automáticamente
      }
      return value;
    })

    .isArray({ min: 1 })
    .withMessage("Debe ingresar un array de al menos un poder"),
  body("poderes.*") // - validar cada elemento individual del array poderes
    .notEmpty()
    .withMessage("Debe indicar al menos un poder, no puede estar vacío")
    .isLength({ min: 3 })
    .withMessage("El poder debe tener como mínimo 3 caracteres")
    .isLength({ max: 60 })
    .withMessage("El poder debe tener como máximo 60 caracteres")
    .isString() //Filtra entradas no textuales
    .withMessage(
      "El poder debe ser un string (NO: numeros: decimal, entero, fechas,booleanos, arrays, objetos)"
    )
    .trim(),
  body("aliados")
    .customSanitizer((value) => {
      if (typeof value === "string") {
        return value
          .split(",") // separa los aliados por comas
          .map((p) => p.trim()) 
          .filter(Boolean); 
      }
      return value;
    }),
  body("enemigos")
    .customSanitizer((value) => {
      if (typeof value === "string") {
        return value
          .split(",") // separa los enemigos por comas
          .map((p) => p.trim()) 
          .filter(Boolean);
      }
      return value;
    })
];
