// services/auth.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.js';

const SECRET = 'clave-ultrasecreta';

export async function registrarUsuario(username, password) {
  const existe = await Usuario.findOne({ username });
  if (existe) throw new Error('El usuario ya existe');

  const passwordHash = await bcrypt.hash(password, 10);
  const nuevoUsuario = new Usuario({ username, passwordHash });
  return await nuevoUsuario.save();
}

export async function loginUsuario(username, password) {
  const usuario = await Usuario.findOne({ username });
  if (!usuario) throw new Error('Usuario no encontrado');

  const coincide = await bcrypt.compare(password, usuario.passwordHash);
  if (!coincide) throw new Error('Contraseña incorrecta');

  const token = jwt.sign({ id: usuario._id, username }, SECRET, { expiresIn: '1h' });
  return { token, username };
}
