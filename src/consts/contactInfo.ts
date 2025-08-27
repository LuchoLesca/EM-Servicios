interface ContactInfo {
  name: string;
  icon: string;
  styles: {
    base?: string;
    callToAction?: string;
  };
  data: string | string[];
  href?: string;
}

type typeContact = 'address' | 'whatsapp' | 'schedule' | 'email' | 'instagram';

export const CONTACT_INFO: Record<typeContact, ContactInfo> = {
  address: {
    name: 'dirección',
    icon: 'map-pin',
    styles: { base: 'bg-blue-100 text-blue-600' },
    data: '12 de octubre - 335',
  },
  whatsapp: {
    name: 'teléfono',
    icon: 'phone',
    data: '+54 9 3445474284',
    href: 'https://wa.me/5493445474284',
    styles: {
      base: 'bg-green-100 text-green-600',
      callToAction: 'bg-green-500 hover:bg-green-600',
    },
  },
  schedule: {
    name: 'horarios',
    icon: 'clock',
    data: [
      'Lunes a Viernes: 9:00 - 18:00',
      'Sábados: 9:00 - 13:00',
      'Domingos: Cerrado',
    ],
    styles: { base: 'bg-purple-100 text-purple-600' },
  },
  email: {
    name: 'email',
    icon: 'mail',
    data: 'info@techrepairpro.com',
    styles: { base: 'bg-orange-100 text-orange-600' },
  },
  instagram: {
    name: 'instagram',
    icon: 'instagram',
    data: 'em_servicio_tecnico',
    href: 'https://www.instagram.com/em_servicio_tecnico',
    styles: {
      callToAction:
        'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
  },
} as const;

export const ADDRESS_INFO = CONTACT_INFO.address;
export const PHONE_INFO = CONTACT_INFO.whatsapp;
export const SCHEDULE_INFO = CONTACT_INFO.schedule;
export const EMAIL_INFO = CONTACT_INFO.email;
export const IG_INFO = CONTACT_INFO.instagram;
