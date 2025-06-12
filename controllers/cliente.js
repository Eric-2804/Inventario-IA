// controllers/cliente.js
import Cliente from '../models/cliente.js';

export async function crearCliente(req, res) {
    try {
        const cliente = new Cliente(req.body);
        const guardado = await cliente.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function listarClientes(req, res) {
    const clientes = await Cliente.find();
    res.json(clientes);
}

export async function obtenerCliente(req, res) {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ error: 'No encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function actualizarCliente(req, res) {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) return res.status(404).json({ error: 'No encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function eliminarCliente(req, res) {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) return res.status(404).json({ error: 'No encontrado' });
        res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
