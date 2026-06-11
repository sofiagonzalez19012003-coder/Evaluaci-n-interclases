# Evento Cultural y Deportivo Interclases — Hoja de calificación

Formulario de evaluación para los jurados del Evento Cultural y Deportivo Interclases
de la **Institución Educativa María Mediadora** (Sabaneta, Antioquia).

- Califica cada criterio de **1 a 5**.
- Categorías: Desfile, Punto sorpresa, Baile grupal, Mascotas.
- Calcula la **nota final sobre 5.0** y arma el ranking por grado en vivo.

## Publicar (elige una)

**GitHub Pages**
1. Sube estos archivos al repositorio.
2. Settings → Pages → Branch: `main` → carpeta `/root` → Save.
3. Tu link queda en: `https://USUARIO.github.io/NOMBRE-REPO/`

**Vercel**
1. Importa el repositorio en vercel.com (Framework Preset: *Other*).
2. Deploy. El `index.html` se sirve tal cual en la raíz.

## Carpetas
- `index.html` — el formulario (lo que abren los jurados).
- `scripts/crear-formulario-evento.gs` — alternativa en Google Forms que guarda
  las respuestas en una hoja de cálculo (ver instrucciones dentro del archivo).

## Nota sobre los resultados
El `index.html` guarda los datos solo en el navegador de quien lo abre.
Para recolectar respuestas de varios jurados en un solo lugar, usa la opción de
Google Forms (`scripts/`) o conecta el HTML a un backend (Apps Script Web App).
