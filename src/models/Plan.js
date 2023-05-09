import { Schema, model } from "mongoose";

const PlanSchema = new Schema(
  {
    nombre: { type: String, require: true },
    foto: { type: String, require: true, trim: true },
    desc: { type: String, require: true },
    tipoPlan: [{ type: String }],
    cAutonoma: { type: String, require: true },
    provincia: { type: String, require: true },
    numCoches: { type: Number, require: true },
    costePlan: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Plan", PlanSchema);
