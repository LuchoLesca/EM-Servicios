export default function formatPhoneNumber(url: string) {
  // Extraer solo los números
  const phone = url.replace('https://wa.me/', '');

  // Separar partes
  const countryCode = '+54';
  const areaCode = phone.slice(2, 3); // "9"
  const number = phone.slice(3); // "3445474284"

  // Formatear
  return `${countryCode} ${areaCode} ${number}`;
}
