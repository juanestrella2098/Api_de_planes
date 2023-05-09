import express from "express";
import PlanRoutes from "./routes/plan.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/plans", PlanRoutes);

export default app;
