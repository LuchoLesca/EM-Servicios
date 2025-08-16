export default function capitalize(str: string): string {
  return str.replace(/^\w/, char => char.toLocaleUpperCase());
}
