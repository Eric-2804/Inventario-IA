// models/cliente.js
import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: String,
  telefono: String,
  correo: { type: String, unique: true }
}, { timestamps: true });

export default mongoose.model('Cliente', ClienteSchema);
