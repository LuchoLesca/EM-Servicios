type Child = Node | string;
type Attributes = Record<string, any>;

function _createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Attributes,
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);

  // Asignar atributos
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (value === undefined || value === null) continue;

      if (key in el) {
        // @ts-expect-error: puede coincidir con propiedad del elemento
        el[key] = value;
      } else {
        el.setAttribute(key, String(value));
      }
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

export const createElement = _createElement;
export const el = _createElement;
