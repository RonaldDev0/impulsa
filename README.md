# Impulsa – Catálogo de Productos Financieros

Landing page desarrollada como solución a la prueba técnica Frontend Senior para una fintech. Esta aplicación muestra un catálogo de productos financieros con diseño moderno, accesibilidad, filtros y visualización detallada. Se desarrolló con enfoque profesional en experiencia de usuario, modularidad y escalabilidad.

## 🚀 Demo

[🔗 Ver Deploy en Vercel](https://impulsa-gray.vercel.app/)

## 🛠️ Tecnologías utilizadas

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS** para layout
- **Styled Components** para componentes visuales reusables
- **ESLint + Prettier** para mantener código limpio y consistente
- **Generación de assets ilustrados personalizados con IA (estilo startup azul)**

## 📂 Estructura del proyecto

```
/src
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── globals.css
│   └── product
│       └── page.tsx
├── components
│   ├── CategoryFilter.tsx
│   └── ProductCard.tsx
├── constants
├── data
├── hooks
├── styles
├── types
│   └── product.ts
```

## ✅ Funcionalidades

- **Catálogo** con 12 productos mockeados (cuentas, créditos, seguros, inversiones).
- **Filtros por categoría** mediante tabs horizontales.
- **Página de detalle** con información completa y botón de regreso.
- **Ilustraciones personalizadas** para cada producto.
- **Diseño responsive y accesible (mobile-first).**

## 🔍 Cómo correr localmente

```bash
git clone https://github.com/RonaldDev0/impulsa.git
cd impulsa
pnpm install
pnpm dev
```

## 📦 Despliegue

Puedes desplegar fácilmente en [Vercel](https://vercel.com) conectando el repo.

## 💡 Decisiones técnicas

### 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Me basé en patrones visuales de confianza y transparencia: mucho espacio en blanco, tipografía clara, colores sobrios (azul) y jerarquía visual de beneficios. Usé ilustraciones vectoriales personalizadas para transmitir cercanía y modernidad.

### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

- **Tailwind**: para layout, espaciados, grid, breakpoints y utilidades globales.
- **Styled Components**: para encapsular estilos específicos de componentes, como tarjetas y detalles, permitiendo reusabilidad y separación visual.

### 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

- Integrar productos reales desde un API REST o GraphQL.
- Internacionalización (i18n) y manejo de monedas/regiones.
- Manejo de sesión, roles y autenticación.
- Panel administrativo para crear/editar productos.
- Testing automatizado (unit + e2e).

### 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

- **Lighthouse + Web Vitals** para medir rendimiento.
- **Sentry** para monitoreo de errores.
- **Vercel Analytics** o **Datadog** para performance.
- Optimización de imágenes vía WebP + lazy loading.

## 🖼️ Ilustraciones

Se generaron 12 imágenes personalizadas estilo flat startup, monocromáticas azul, alineadas al diseño. Fueron generadas con IA y convertidas a `.webp` para máxima optimización.

