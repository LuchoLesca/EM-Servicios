export default function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes: Partial<Record<keyof HTMLElementTagNameMap[K], any>> &
    Record<string, any> = {},
  children: (Node | string)[] = []
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);

  // Asignar atributos
  for (const [key, value] of Object.entries(attributes)) {
    if (value === undefined || value === null) continue;

    if (key in el) {
      // @ts-expect-error -> puede ser propiedad del elemento
      el[key] = value;
    } else {
      el.setAttribute(key, String(value));
    }
  }

  // Añadir hijos
  for (const child of children) {
    el.appendChild(
      typeof child === 'string' ? document.createTextNode(child) : child
    );
  }

  return el;
}
