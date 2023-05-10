import { Router } from "express";

import * as planController from "../controllers/plan.controller";

import * as planValidator from "../validators/plan.validator";

const router = Router();

router.get("/", planController.findAllPlans);

router.get(
  "/:id",
  planValidator.findOnePlanValidator,
  planController.findOnePlan
);

router.post("/", planValidator.createPlanValidator, planController.createPlan);

router.put(
  "/:id",
  planValidator.updatePlanValidator,
  planController.updatePlan
);

router.delete(
  "/:id",
  planValidator.deletePlanValidator,
  planController.deletePlan
);

export default router;
