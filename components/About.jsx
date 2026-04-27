import Image from "next/image";
import styles from "./About.module.css";
import { Sprout, ShieldCheck, Handshake } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className={`section ${styles.about}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageGrid}>
          <div className={styles.mainImage}>
            <Image src="/images/processing.webp" alt="Procesamiento de Maíz" width={600} height={400} className={styles.img} />
            <div className={styles.experienceBadge}>
              <span className={styles.expText}>Comprometidos con<br />el Campo.</span>
            </div>
          </div>
          <div className={styles.secondaryImage}>
            <Image src="/images/about_hands.webp" alt="Campo de Maíz" width={400} height={260} className={styles.img} />
          </div>
        </div>

        <div className={styles.content}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Compromiso con la Tierra</h2>
          <p className={styles.description}>
            En Nutralmena, entendemos que el éxito de tu negocio comienza en el campo.
            Como productores y procesadores, controlamos cada etapa del camino: desde la
            selección de la semilla hasta el envasado final.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <Sprout size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Origen Directo</h3>
                <p>Sin intermediarios, del campo a tu bodega.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Calidad Certificada</h3>
                <p>Procesos rigurosos que garantizan la pureza del grano.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <Handshake size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Trato Personalizado</h3>
                <p>Soluciones a medida para mayoristas y distribuidores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
