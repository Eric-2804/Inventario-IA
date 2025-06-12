// routes/cliente.js
import express from 'express';
import {
  crearCliente,
  listarClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente
} from '../controllers/cliente.js';

import { verificarToken } from '../middlewares/auth.js';

const router = express.Router();

router.use(verificarToken); // protege todas las rutas

router.post('/', crearCliente);
router.get('/', listarClientes);
router.get('/:id', obtenerCliente);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

export default router;
