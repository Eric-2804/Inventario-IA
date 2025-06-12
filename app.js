// app.js
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import { verificarToken } from './middlewares/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/inventario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB conectado')).catch(console.error);

// Rutas
app.use('/auth', authRoutes);

// Ruta protegida de prueba
app.get('/protegido', verificarToken, (req, res) => {
  res.json({ mensaje: 'Accediste a una ruta protegida ✅', usuario: req.usuario });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

