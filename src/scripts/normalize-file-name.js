// rename-images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Carpeta de origen y destino
const inputDir = '../assets/imgs/repairs'; // cámbiala según tu caso
const outputDir = '../assets/imgs/repairs/formatted'; // carpeta donde se guardarán los archivos renombrados

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para limpiar y formatear el nombre del archivo
function formatFileName(filename) {
  // Quitar extensión
  const ext = path.extname(filename);
  let name = path.basename(filename, ext);

  // Eliminar emojis y símbolos (dejamos solo letras, números y espacios)
  name = name.replace(/[^\p{L}\p{N}\s-]/gu, '');

  // Normalizar (quitar tildes, ñ -> n, etc.)
  name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Convertir a minúsculas
  name = name.toLowerCase();

  // Reemplazar espacios y guiones múltiples por uno solo
  name = name.replace(/[\s_]+/g, '-').replace(/-+/g, '-');

  // Eliminar guiones al inicio o final
  name = name.replace(/^-|-$/g, '');

  return name + ext.toLowerCase();
}

// Procesar imágenes
async function processImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    if (fs.lstatSync(inputPath).isFile()) {
      const newFileName = formatFileName(file);
      const outputPath = path.join(outputDir, newFileName);

      try {
        await sharp(inputPath)
          .resize(600, 600, {
            fit: 'cover', // recorta para llenar 600x600
            position: 'center',
          })
          .webp({ quality: 50 }) // convierte a jpeg con 80% de calidad
          .toFile(outputPath);

        console.log(`✅ ${file} → ${newFileName}`);
      } catch (err) {
        console.error(`❌ Error procesando ${file}:`, err);
      }
    }
  }
}

processImages();

// // Procesar todos los archivos
// fs.readdirSync(inputDir).forEach(file => {
//   const inputPath = path.join(inputDir, file);

//   if (fs.lstatSync(inputPath).isFile()) {
//     const newFileName = formatFileName(file);
//     const outputPath = path.join(outputDir, newFileName);

//     // fs.copyFileSync(inputPath, outputPath);

//     // console.log(`✅ ${file} → ${newFileName}`);
//     console.log(outputPath);
//   }
// });
