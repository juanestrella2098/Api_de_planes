import express from "express";
import TaskRoutes from "./routes/task.routes";
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
app.use("/api/plans", TaskRoutes);

export default app;
