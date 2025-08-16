export default {
  // Configuración básica
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // Plugins
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // Debe ir al final
  ],

  // Configuración específica por tipo de archivo
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },
  ],

  // Configuración específica para Tailwind
  tailwindConfig: './tailwind.config.mjs',
  tailwindFunctions: ['clsx', 'cn', 'cva'],
};
