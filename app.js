const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const verificarToken = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/inventario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado')).catch(console.error);

// Rutas públicas
app.use('/auth', authRoutes);

// Rutas protegidas de ejemplo
app.get('/protegido', verificarToken, (req, res) => {
  res.json({ message: '¡Ruta protegida!', usuario: req.usuario });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
