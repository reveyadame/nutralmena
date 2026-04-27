import Image from "next/image";
import styles from "./InfoBanners.module.css";

const banners = [
  {
    id: "calidad",
    image: "/images/grafico1.webp",
    align: "left",
    badge: "Selección de Granos",
    title: "Solo los Mejores Granos Llegan a tu Negocio",
    text: "Aplicamos un riguroso proceso de selección y clasificación en cada lote. Nuestros granos son inspeccionados para garantizar pureza, humedad óptima y libre de impurezas.",
    cta: "Ver Productos",
    ctaLink: "#productos",
  },
  {
    id: "proceso",
    image: "/images/grafico2.webp",
    align: "right",
    badge: "Procesamiento Industrial",
    title: "De la Cosecha al Costal con Tecnología de Punta",
    text: "Contamos con equipos de procesamiento modernos que garantizan consistencia en cada presentación, ya sea maíz entero, quebrado, rolado o mezclado.",
    cta: "Conocer el Proceso",
    ctaLink: "#nosotros",
  },
  {
    id: "variedades",
    image: "/images/grafico3.webp",
    align: "left",
    badge: "Variedad de Productos",
    title: "Cuatro Presentaciones para Cada Necesidad",
    text: "Maíz Entero, Quebrado, Rolado y Mezclado. Disponibles en sacos de 25 kg y 40 kg para adaptarse a cualquier volumen de operación en tu negocio ganadero o avícola.",
    cta: "Ver Catálogo",
    ctaLink: "#productos",
  },
];

export default function InfoBanners() {
  return (
    <div className={styles.bannersWrapper}>
      {banners.map((banner) => (
        <section key={banner.id} className={`${styles.banner} ${styles[`align${banner.align}`]}`}>
          <div className={styles.imagePane}>
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className={styles.bgImg}
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.contentPane}>
            <div className={styles.inner}>
              <span className={styles.badge}>{banner.badge}</span>
              <h2 className={styles.title}>{banner.title}</h2>
              <p className={styles.text}>{banner.text}</p>
              <a href={banner.ctaLink} className="btn btn-primary">{banner.cta}</a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
