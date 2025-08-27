import Hero from '@/sections/Hero.astro';
import Services from '@/sections/Services.astro';
import Portfolio from '@/sections/Portfolio.astro';
import Testimonials from '@/sections/Testimonials.astro';
import Contact from '@/sections/Contact.astro';

export const ROUTES = [
  {
    id: 'inicio',
    href: '#',
    name: 'inicio',
    component: Hero,
  },
  {
    id: 'servicios',
    href: '#servicios',
    name: 'servicios',
    component: Services,
  },
  {
    id: 'trabajos',
    href: '#trabajos',
    name: 'trabajos',
    component: Portfolio,
  },
  {
    id: 'testimonios',
    href: '#testimonios',
    name: 'testimonios',
    component: Testimonials,
  },
  {
    id: 'contacto',
    href: '#contacto',
    name: 'contacto',
    component: Contact,
  },
];
