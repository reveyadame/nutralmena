import Image from "next/image";
import styles from "./Products.module.css";
import { CheckCircle2 } from "lucide-react";

export default function Products() {
  const cornTypes = [
    { 
      id: "entero", 
      name: "Maíz Entero", 
      desc: "Granos enteros seleccionados de alta pureza.",
      color: "var(--color-yellow)" 
    },
    { 
      id: "quebrado", 
      name: "Maíz Quebrado", 
      desc: "Procesado ideal para alimentación animal rápida.",
      color: "var(--color-orange)" 
    },
    { 
      id: "rolado", 
      name: "Maíz Rolado", 
      desc: "Hojuelas de maíz procesado con vapor para mejor digestión.",
      color: "var(--color-accent-brown)" 
    },
    { 
      id: "mezclado", 
      name: "Maíz Mezclado", 
      desc: "Mezcla balanceada según requerimientos específicos.",
      color: "var(--color-dark-brown)" 
    },
  ];

  return (
    <section id="productos" className={`section ${styles.products}`}>
      <div className={styles.watermark}></div>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className="section-title">Catálogo de Productos</h2>
          <p className={styles.subtitle}>
            Conoce nuestra selección de maíz procesado. <br/>
            <strong>Todas nuestras variedades están disponibles en presentaciones de 25 kg y 40 kg.</strong>
          </p>
        </div>

        <div className={styles.grid}>
          {cornTypes.map((product, idx) => (
            <div key={product.id} className={styles.card} style={{'--product-color': product.color}}>
              <div className={styles.cardImages}>
                <div className={styles.sackContainer}>
                  <Image src="/images/costal_40kg.webp" alt="Costal 40kg" width={200} height={300} className={styles.sackLarge} />
                  <Image src="/images/costal_25kg.webp" alt="Costal 25kg" width={150} height={220} className={styles.sackSmall} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDesc}>{product.desc}</p>
                <div className={styles.presentations}>
                  <span className={styles.badge}>
                    <CheckCircle2 size={16} /> 25 kg
                  </span>
                  <span className={styles.badge}>
                    <CheckCircle2 size={16} /> 40 kg
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaWrapper}>
          <a href="#contacto" className="btn btn-primary">
            Solicitar Cotización Mayorista
          </a>
        </div>
      </div>
    </section>
  );
}
