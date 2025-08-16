import { type Service } from '@/types/service';

export const SERVICES: Service[] = [
  {
    icon: 'smartphone',
    title: 'Reparación de Celulares',
    description: 'Pantallas, baterías, cámaras, conectores de carga y más.',
    features: [
      'Cambio de pantalla',
      'Reparación de batería',
      'Problemas de software',
      'Liberación de equipos',
    ],
  },
  {
    icon: 'gamepad-2',
    title: 'PlayStation y Joysticks',
    description: 'Reparación completa de consolas y controles de videojuegos.',
    features: [
      'PlayStation 4/5',
      'Joysticks analógicos',
      'Problemas de lectura',
      'Limpieza profunda',
    ],
  },
  {
    icon: 'volume-2',
    title: 'Parlantes y Audio',
    description: 'Reparación de equipos de sonido y sistemas de audio.',
    features: [
      'Parlantes Bluetooth',
      'Sistemas de sonido',
      'Amplificadores',
      'Conectividad',
    ],
  },
  {
    icon: 'laptop',
    title: 'Notebooks y Laptops',
    description: 'Solución a problemas de hardware y software en notebooks.',
    features: [
      'Pantallas LCD/LED',
      'Teclados',
      'Carga de batería',
      'Formateo y limpieza',
    ],
  },
];
