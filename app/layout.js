import "./globals.css";
import { Sora } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

// Sora: geometric sans moderno y corporativo. Contraste perfecto con Roca One.
// Trazo limpio, legibilidad excelente en todos los pesos, no genérico.
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://nutralmena.com"),
  title: "Nutralmena - Del Campo a tu Negocio",
  description: "Procesamiento y venta de maíz de la más alta calidad, directo del productor sin intermediarios.",
  keywords: ["maíz", "agro", "productor", "nutralmena", "venta de maíz", "maíz quebrado", "maíz rolado", "chihuahua", "cuauhtémoc"],
  icons: {
    icon: "/images/icono.webp",
    shortcut: "/images/icono.webp",
    apple: "/images/icono.webp",
  },
  openGraph: {
    title: "Nutralmena - Maíz directo del campo",
    description: "Procesamiento y venta de maíz de la más alta calidad, directo del productor sin intermediarios.",
    url: "https://nutralmena.com",
    siteName: "Nutralmena",
    images: [
      {
        url: "/images/icono.webp",
        width: 800,
        height: 600,
        alt: "Nutralmena Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={sora.variable}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
