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
  title: "Nutralmena - Del Campo a tu Negocio",
  description: "Procesamiento y venta de maíz de la más alta calidad, directo del productor sin intermediarios.",
  keywords: ["maíz", "agro", "productor", "nutralmena", "venta de maíz", "maíz quebrado", "maíz rolado"],
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
