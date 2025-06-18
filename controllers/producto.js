import Producto from "../models/producto.js";

export async function crearProducto(req, res) {
  try {
    const nuevo = new Producto(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function listarProductos(req, res) {
  const productos = await Producto.find();
  res.json(productos);
}

export async function obtenerProducto(req, res) {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: "No encontrado" });
    res.json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function actualizarProducto(req, res) {
  try {
    const actualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!actualizado) return res.status(404).json({ error: "No encontrado" });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function eliminarProducto(req, res) {
  try {
    const eliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "No encontrado" });
    res.json({ mensaje: "Producto eliminado" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
