const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const SECRET = 'clave-ultrasecreta'; // en producción usa una variable de entorno

async function registrarUsuario(username, password) {
  const existe = await Usuario.findOne({ username });
  if (existe) throw new Error('El usuario ya existe');

  const passwordHash = await bcrypt.hash(password, 10);
  const nuevoUsuario = new Usuario({ username, passwordHash });
  return await nuevoUsuario.save();
}

async function loginUsuario(username, password) {
  const usuario = await Usuario.findOne({ username });
  if (!usuario) throw new Error('Usuario no encontrado');

  const coincide = await bcrypt.compare(password, usuario.passwordHash);
  if (!coincide) throw new Error('Contraseña incorrecta');

  const token = jwt.sign({ id: usuario._id, username }, SECRET, { expiresIn: '1h' });
  return { token, username };
}

module.exports = { registrarUsuario, loginUsuario };