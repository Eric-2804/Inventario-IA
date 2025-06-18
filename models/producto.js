import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  numero: { type: Number, required: true },
  descripcion: { type: String },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Producto', productoSchema);
