// models/usuario.js
import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }
});

export default mongoose.model('Usuario', UsuarioSchema);
