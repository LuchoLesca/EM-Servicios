// consts/fieldsForm.ts
import type { FieldType } from '@/types/field';

const FIELDS_FORM = [
  {
    label: 'Nombre completo',
    type: 'text',
    name: 'name',
    placeholder: 'Pedro Perez',
  },
  {
    label: 'Dispositivo a reparar',
    type: 'select',
    name: 'device',
    options: [
      { name: 'smartphone', label: 'Celular' },
      { name: 'console', label: 'PlayStation/Xbox' },
      { name: 'pc', label: 'Notebook/Laptop' },
      { name: 'audio', label: 'Parlante/Audio' },
      { name: 'joystick', label: 'Joystick/Control' },
      { name: 'other', label: 'Otro' },
    ],
  },
  {
    label: 'Describe el problema',
    type: 'textarea',
    name: 'description',
    placeholder: 'El dispositivo funcionaba bien hasta que...',
    rows: 4,
  },
] as const satisfies readonly FieldType[];

export default FIELDS_FORM;
