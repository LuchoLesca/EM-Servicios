import { type Repair } from '@/types/repair';

const unsplashPhotos = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop',
];

const a: Repair[] = [
  {
    id: 1,
    title: 'iPhone 13 Pro - Cambio de Pantalla',
    category: 'celulares',
    before:
      'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=400',
    after:
      'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Reparación completa de pantalla rota con reemplazo de display OLED original. Incluye calibración táctil y pruebas de funcionalidad.',
    time: '2 horas',
  },
  {
    id: 2,
    title: 'PlayStation 5 - Limpieza y Mantenimiento',
    category: 'consolas',
    before:
      'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=400',
    after:
      'https://images.pexels.com/photos/7915434/pexels-photo-7915434.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Limpieza profunda del sistema de ventilación, cambio de pasta térmica y optimización del rendimiento. Reducción de ruido significativa.',
    time: '4 horas',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S22 - Reparación de Cámara',
    category: 'celulares',
    before:
      'https://images.pexels.com/photos/1765031/pexels-photo-1765031.jpeg?auto=compress&cs=tinysrgb&w=400',
    after:
      'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Reemplazo del módulo de cámara trasera principal. Calibración y pruebas de enfoque automático y estabilización.',
    time: '1.5 horas',
  },
  {
    id: 4,
    title: 'MacBook Air - Cambio de Batería',
    category: 'notebooks',
    before:
      'https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&w=400',
    after:
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Reemplazo de batería hinchada por una nueva original. Incluye calibración del sistema y verificación de ciclos de carga.',
    time: '3 horas',
  },
  {
    id: 5,
    title: 'JBL Charge 4 - Reparación de Conectividad',
    category: 'parlantes',
    before:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    after:
      'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Reparación del módulo Bluetooth y puerto USB-C. Restauración completa de la conectividad inalámbrica y carga rápida.',
    time: '2.5 horas',
  },
  {
    id: 6,
    title: 'DualSense PS5 - Joystick Analógico',
    category: 'controles',
    before:
      'https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg?auto=compress&cs=tinysrgb&w=400',
    after:
      'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Reemplazo de joystick analógico derecho por drift. Incluye calibración y pruebas de respuesta háptica.',
    time: '1 hora',
  },
];

const REPAIRS = a.map((repair, i) => {
  return {
    ...repair,
    before: unsplashPhotos[(i * 2) % unsplashPhotos.length],
    after: unsplashPhotos[(i * 2 + 1) % unsplashPhotos.length],
  };
  // repair.before = unsplashPhotos[(i * 2) % unsplashPhotos.length];
  // repair.after = unsplashPhotos[(i * 2 + 1) % unsplashPhotos.length];
});

export { REPAIRS };
