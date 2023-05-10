import { body, param } from "express-validator";
import { validationHandler } from "../shared/validation.handler";

export const findOnePlanValidator = [
  param("id").exists().withMessage("The id parameter is required"),
  (req, res, next) => {
    validationHandler(req, res, next);
  },
];

export const createPlanValidator = [
  body("nombre").escape().optional(),
  body("foto")
    .escape()
    .optional()
    .trim()
    .isURL()
    .withMessage("Field 'foto' need to be an URL image"),
  body("desc").escape().optional(),
  body("tipoPlan").escape().optional(),
  body("cAutonoma").escape().optional(),
  body("provincia").escape().optional(),
  body("numCoches")
    .escape()
    .optional()
    .isInt({
      min: 0,
      max: 3,
    })
    .withMessage("Field 'numCoches' needs to be a integer"),
  body("costePlan")
    .escape()
    .notEmpty()
    .optional()
    .isInt({
      min: 0,
      max: 5,
    })
    .withMessage(
      "Field 'numCoches' needs to be a integer, min value: 0 and max value: 5"
    ),
  (req, res, next) => {
    validationHandler(req, res, next);
  },
];

export const deletePlanValidator = [
  param("id").exists().withMessage("The id parameter is required"),
  (req, res, next) => {
    validationHandler(req, res, next);
  },
];

export const updatePlanValidator = [
  param("id").exists().withMessage("The id parameter is required"),
  body("nombre")
    .escape()
    .notEmpty()
    .withMessage("Field 'nombre' cannot be empty"),
  body("foto")
    .escape()
    .notEmpty()
    .withMessage("Field 'foto' cannot be empty")
    .trim()
    .isURL()
    .withMessage("Field 'foto' needs to be a URL image"),
  body("desc").escape().notEmpty().withMessage("Field 'desc' cannot be empty"),
  body("tipoPlan")
    .escape()
    .notEmpty()
    .withMessage("Field 'tipoPlan' cannot be empty"),
  body("cAutonoma")
    .escape()
    .notEmpty()
    .withMessage("Field 'cAutonoma' cannot be empty"),
  body("provincia")
    .escape()
    .notEmpty()
    .withMessage("Field 'provincia' cannot be empty"),
  body("numCoches")
    .escape()
    .notEmpty()
    .withMessage("Field 'numCoches' cannot be empty")
    .isInt({
      min: 0,
      max: 3,
    })
    .withMessage("Field 'numCoches' needs to be a integer"),
  body("costePlan")
    .escape()
    .notEmpty()
    .withMessage(
      "Field 'costePlan' cannot be empty, min value: 0 and max value:3"
    )
    .isInt({
      min: 0,
      max: 5,
    })
    .withMessage(
      "Field 'numCoches' needs to be a integer, min value: 0 and max value: 5"
    ),
  (req, res, next) => {
    validationHandler(req, res, next);
  },
];
