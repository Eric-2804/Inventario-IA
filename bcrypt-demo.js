const bcrypt = require('bcryptjs');

async function probarHash() {
  const passwordOriginal = 'admin123';

  // Crear hash
  const hash = await bcrypt.hash(passwordOriginal, 10);
  console.log('🔐 Contraseña original:', passwordOriginal);
  console.log('🔒 Hash generado:', hash);

  // Simulamos que el usuario ingresa la contraseña
  const passwordIngresada = 'admin123';
  const esCorrecta = await bcrypt.compare(passwordIngresada, hash);
  console.log('✅ ¿La contraseña coincide?', esCorrecta);

  // Prueba con una incorrecta
  const incorrecta = await bcrypt.compare('otroPassword', hash);
  console.log('❌ ¿Una incorrecta coincide?', incorrecta);
}

probarHash();
