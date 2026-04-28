import styles from "./GraficoBanners.module.css";
import { CheckCircle2, MapPin, Package } from "lucide-react";

const reasons = [
  {
    id: "calidad",
    icon: CheckCircle2,
    badge: "Grano Seleccionado",
    title: "Maíz de Calidad Superior",
    text: "Cada lote pasa por un riguroso proceso de selección, clasificación y control de humedad. Te garantizamos un grano limpio, puro y con la consistencia que tu negocio necesita en cada entrega.",
    points: ["Pureza garantizada en cada saco", "Control de humedad óptima", "Sin impurezas ni material extraño"],
  },
  {
    id: "region",
    icon: MapPin,
    badge: "Origen Local",
    title: "Producido en la Región",
    text: "Somos productores chihuahuenses. Conocemos la tierra, el clima y la temporada. Al comprar con nosotros apoyas el campo mexicano y recibes un maíz fresco, directo de nuestra región al norte del país.",
    points: ["Sin intermediarios en la cadena", "Frescura garantizada de cosecha"],
  },
  {
    id: "presentaciones",
    icon: Package,
    badge: "Amplio Catálogo",
    title: "Varias Presentaciones",
    text: "Contamos con cinco variedades de procesado (Entero, Quebrado, Rolado, Molido y Mezclado), todas disponibles en costales de 25 kg y 40 kg, para adaptarnos a cualquier volumen de operación.",
    points: ["5 tipos de proceso disponibles", "Presentaciones de 25 kg y 40 kg", "Pedidos al por mayor con precio especial"],
  },
];

export default function GraficoBanners() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Por Que Elegir Nutralmena</h2>
        <p className={styles.sectionSub}>
          Mas de una decada suministrando maiz de calidad al norte del pais.
          Estos son los pilares que nos distinguen.
        </p>
        <div className={styles.grid}>
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.id} className={styles.card}>
                <div className={styles.iconCircle}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <span className={styles.badge}>{reason.badge}</span>
                <h3 className={styles.title}>{reason.title}</h3>
                <p className={styles.text}>{reason.text}</p>
                <ul className={styles.points}>
                  {reason.points.map((pt, i) => (
                    <li key={i} className={styles.point}>
                      <span className={styles.dot} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
