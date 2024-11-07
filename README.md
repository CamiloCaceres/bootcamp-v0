# React + TypeScript + Vite + IA

Esta aplicación fue generada utilizando V0, Claude Sonnet a través de Cursor, y está construida con React, Tailwind CSS y shadcn/ui.

## Descripción

Este proyecto forma parte de la Sesión 5 del Bootcamp de Inteligencia Artificial, demostrando la integración de herramientas modernas de desarrollo y IA.

## Stack Tecnológico

- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción ultrarrápida
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de UI reutilizables
- **V0** - Herramienta de generación de código con IA

## Características

- Hot Module Replacement (HMR)
- Configuración de ESLint incluida
- Soporte completo de TypeScript
- Componentes estilizados con Tailwind CSS
- UI moderna con shadcn/ui

## Configuración de ESLint

Para aplicaciones en producción, se recomienda habilitar las reglas de tipo:

1. Configura las `parserOptions` así:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Actualiza la configuración de ESLint para React:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Desarrollo Local

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`

## Plugins Oficiales

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Usa Babel
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Usa SWC
