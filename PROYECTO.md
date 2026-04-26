# Contexto del Proyecto: Nutralmena — Landing Page

## Estado del proyecto
- **Tecnología**: Next.js (App Router), React, CSS Modules
- **Conversación original**: 5745d162-a71e-417c-ba74-ada8f7f50924

## Información del negocio
- **Empresa**: Nutralmena
- **Giro**: Procesamiento y venta de maíz al por mayor (agro-industrial)
- **Ubicación**: Campo 106 Casa 111, Cuauhtémoc, Chih 31610
- **Teléfono / WhatsApp**: +52 625 104 1330
- **Correo**: ventas@nutralmena.com
- **Horario**: Lun-Vie 8:00-18:00, Sáb 9:00-14:00

## Paleta de colores (CSS variables)
| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#444f12` | Verde olivo oscuro (principal) |
| `--color-primary-dark` | `#2c330b` | Verde muy oscuro |
| `--color-primary-light` | `#a6b864` | Verde claro |
| `--color-accent-brown` | `#bd612a` | Naranja quemado |
| `--color-dark-brown` | `#724f27` | Marrón |
| `--color-orange` | `#e89a40` | Naranja |
| `--color-yellow` | `#fac000` | Amarillo/Oro |

## Tipografía
- **Primaria (display)**: Roca One Bold — fuente local en `/public/fonts/roca-one-bold.ttf` — con `unicode-range` para letras
- **Secundaria (body)**: Sora — Google Font, cargada via `next/font/google` en `layout.js` — variable CSS `--font-sora`
- **Fallback**: `Segoe UI`, `Arial`, `sans-serif`

## Estructura de archivos clave
```
app/
  globals.css       ← Sistema de diseño: colores, tipografía, utilidades
  layout.js         ← Root layout: carga Sora, incluye WhatsAppButton
  page.js           ← Ensamblaje principal de secciones

components/
  HeroSliderV2.jsx  ← ACTIVO: Slider split-screen "Campo Abierto"
  HeroSlider.jsx    ← V1 (backup, no activo)
  About.jsx         ← Sección "Compromiso con la Tierra"
  Products.jsx      ← Cuatro tipos de maíz + presentaciones 25/40kg
  InfoBanners.jsx   ← Banners alternados con imágenes de Graficos 01-03
  GraficoBanners.jsx ← "Por Qué Elegirnos": Calidad, Región, Presentaciones
  Contact.jsx       ← Formulario + datos de contacto reales
  Footer.jsx        ← Pie de página "Tierra Oscura" con CTA band
  Header.jsx        ← Header sticky con glassmorphism al scroll
  WhatsAppButton.jsx ← Botón flotante con SVG de WhatsApp
  Stats.jsx         ← (eliminado del page.js por el usuario)

public/
  images/           ← Todas las imágenes del proyecto
    logo.png        ← Logo principal
    logo-header.png ← Logo para el header
    logo-footer.png ← Logo para el footer
    costal_25kg.png ← Mockup costal 25 kg (14 MB, Next/Image lo optimiza)
    costal_40kg.png ← Mockup costal 40 kg (16 MB, Next/Image lo optimiza)
    hero_corn_field.png, processing.png, corn_quality_control.png
    about_corn_process.png, drone_field.png, delivery.png
    grafico_01.png .. grafico_06.png ← Copias de la carpeta /Graficos/
  fonts/
    roca-one-bold.ttf
    CocoGothic_trial.ttf (no usada)
    CocoGothic-Bold_trial.ttf (no usada)
```

## Notas importantes
- **lucide-react v1.11**: NO tiene Facebook, Instagram. Para redes sociales usar SVG inline.
- **WhatsApp**: Usa SVG oficial inline en `WhatsAppButton.jsx`
- **Fuentes trial**: Las fuentes Coco Gothic eran trial y no tenían números/especiales. Se reemplazaron por Sora.
- **Sora**: Cargada con `unicode-range` NOT aplicado — es completa. Coco Gothic tenía `unicode-range` restringido.
- **Roca One**: Sí tiene `unicode-range` restrictivo (solo letras) como seguridad. Números caen al fallback Sora.

## Para retomar el proyecto
1. Abrir workspace `c:\Websites\Nutralmena`
2. Correr `npm run dev` para desarrollo local
3. El servidor corre en `http://localhost:3000`
4. Referirse a este archivo para contexto de marca y decisiones de diseño
