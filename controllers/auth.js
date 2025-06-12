// controllers/auth.js
import { registrarUsuario, loginUsuario } from '../services/auth.js';

export async function register(req, res) {
    try {
        const { username, password } = req.body;
        const usuario = await registrarUsuario(username, password);
        res.status(201).json({ message: 'Usuario registrado correctamente', usuario });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;
        const result = await loginUsuario(username, password);
        res.json(result);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
}

