import styles from "./Contact.module.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.infoColumn}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Hablemos de Negocios</h2>
          <p className={styles.intro}>
            Estamos listos para surtir tu negocio con el mejor maíz del campo.
            Contáctanos para cotizaciones, dudas sobre nuestros procesos o pedidos al por mayor.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.icon} size={24} />
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>+52 625 104 1330</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} size={24} />
              </div>
              <div>
                <h4>Correo Electrónico</h4>
                <p>ventas@nutralmena.com</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} size={24} />
              </div>
              <div>
                <h4>Ubicación</h4>
                <p>Campo 106 Casa 111<br />Cuauhtemoc, Chih 31610</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formColumn}>
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Envíanos un mensaje</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" placeholder="Tu nombre" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" placeholder="Tu teléfono" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje / Pedido</label>
              <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required className={styles.input}></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
