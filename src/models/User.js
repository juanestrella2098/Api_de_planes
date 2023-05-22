import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    idFirebase: { type: String, required: true, unique:true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: {type: Number, required: true},
    viajesFavoritos: { type: [String], default: [] },
    viajesRealizados: { type: [String], default: [] },
  },
  {
    versionKey: false,
  }
);

export default model("User", UserSchema);
