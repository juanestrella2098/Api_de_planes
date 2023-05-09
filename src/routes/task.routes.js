import { Router } from "express";

import * as planController from "../controllers/plan.controller";

const router = Router();

router.get("/", planController.findAllPlans);

router.get("/:id", planController.findOnePlan);

router.post("/", planController.createPlan);

router.put("/:id", planController.updatePlan);

router.delete("/:id", planController.deletePlan);

export default router;
