import { type Repair } from '@/types/repair';

const baseUrl = '/assets/imgs/repairs/formatted/';

const REPAIRS: Repair[] = [
  {
    id: 1,
    title: 'Xbox Series X - Reparación de Botón RB',
    category: 'controles',
    after: `${baseUrl}arreglo-de-boton-rb-en-control-de-xbox-series-x-1.webp`,
    before: `${baseUrl}arreglo-de-boton-rb-en-control-de-xbox-series-x.webp`,
    description:
      'Reemplazo del botón RB atascado. Incluye limpieza interna y pruebas de funcionalidad completa.',
    time: '5 horas',
  },
  {
    id: 2,
    title: 'Xbox Series X - Reparación de Botón RB',
    category: 'controles',
    after: `${baseUrl}cambio-de-analogico-joystick-1.webp`,
    before: `${baseUrl}cambio-de-analogico-joystick.webp`,
    description:
      'Reemplazo del joystick analógico izquierdo por desgaste. Incluye calibración y pruebas de respuesta',
    time: '1.5 horas',
  },
  {
    id: 3,
    title: 'Xiaomi Redmi Note 8 Pro - Cambio de Módulo de Carga',
    category: 'celulares',
    after: `${baseUrl}cambio-de-modulo-para-este-xiaomi-redmi-mi-9t-1.webp`,
    before: `${baseUrl}cambio-de-modulo-para-este-xiaomi-redmi-mi-9t.webp`,
    description:
      'Reemplazo del módulo de carga defectuoso. Incluye pruebas de carga y verificación de puertos.',
    time: '2 horas',
  },
  {
    id: 4,
    title: 'Xiaomi Redmi Mi 9T - Reparación de Módulo de Carga',
    category: 'celulares',
    after: `${baseUrl}cambio-de-modulo-para-xiaomi-redmi-note-8-pro-1.webp`,
    before: `${baseUrl}cambio-de-modulo-para-xiaomi-redmi-note-8-pro.webp`,
    description:
      'Reemplazo del módulo de carga defectuoso. Incluye pruebas de carga y verificación de puertos.',
    time: '2 horas',
  },
  {
    id: 5,
    title: 'Joystick PS4 - Reparación de Pin de Carga',
    category: 'controles',
    after: `${baseUrl}cambio-de-pin-de-carga-que-estaba-en-corto-y-se-revivio-la-bateria-para-este-joystic-de-ps4-1.webp`,
    before: `${baseUrl}cambio-de-pin-de-carga-que-estaba-en-corto-y-se-revivio-la-bateria-para-este-joystic-de-ps4.webp`,
    description:
      'Reparación del pin de carga en corto. Incluye resoldado de placa y restauración de la batería interna.',
    time: '3 horas',
  },
  {
    id: 6,
    title: 'iPhone 8 - Cambio de Tapa Trasera',
    category: 'celulares',
    after: `${baseUrl}cambio-de-tapa-trasera-de-iphone-8el-repuesto-ya-lo-tenia-el-cliente-1.webp`,
    before: `${baseUrl}cambio-de-tapa-trasera-de-iphone-8el-repuesto-ya-lo-tenia-el-cliente.webp`,
    description:
      'Reemplazo de tapa trasera agrietada. Incluye limpieza interna y verificación de sellos contra agua.',
    time: '2 horas',
  },
  {
    id: 7,
    title: 'Netbook G5 - Desbloqueo de Arranques',
    category: 'notebooks',
    after: `${baseUrl}desbloqueo-de-arranques-en-netbook-del-gobierno-modelo-g5-1.webp`,
    before: `${baseUrl}desbloqueo-de-arranques-en-netbook-del-gobierno-modelo-g5.webp`,
    description:
      'Desbloqueo del sistema de arranque seguro. Incluye reinstalación del sistema operativo y optimización.',
    time: '4 horas',
  },
  {
    id: 8,
    title: 'PS3 Super Slim - Mantenimiento Completo',
    category: 'consolas',
    after: `${baseUrl}mantenimiento-completo-para-ps3-super-slim-1.webp`,
    before: `${baseUrl}mantenimiento-completo-para-ps3-super-slim.webp`,
    description:
      'Mantenimiento integral con limpieza interna, cambio de pasta térmica y revisión de componentes.',
    time: '5 horas',
  },
];

export { REPAIRS };
