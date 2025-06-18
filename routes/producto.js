import express from 'express';
import {
  crearProducto,
  listarProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/producto.js';

import { verificarToken } from '../middlewares/auth.js';

const router = express.Router();
router.use(verificarToken);

router.post('/', crearProducto);
router.get('/', listarProductos);
router.get('/:id', obtenerProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
