"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Ocurrió un error");
      
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", phone: "", message: "" });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Envíanos un mensaje</h3>
            
            {status.success && (
              <div style={{ background: 'rgba(166, 184, 100, 0.1)', borderLeft: '4px solid var(--color-primary)', padding: '1rem', marginBottom: '1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle color="var(--color-primary)" size={20} />
                <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>¡Mensaje enviado con éxito! Te contactaremos pronto.</span>
              </div>
            )}
            
            {status.error && (
              <div style={{ background: 'rgba(232, 154, 64, 0.1)', borderLeft: '4px solid var(--color-orange)', padding: '1rem', marginBottom: '1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <AlertCircle color="var(--color-orange)" size={20} />
                <span style={{ color: 'var(--color-orange)', fontWeight: 500 }}>{status.error}</span>
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required className={styles.input} disabled={status.loading} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="Tu teléfono" required className={styles.input} disabled={status.loading} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje / Pedido</label>
              <textarea id="message" value={formData.message} onChange={handleChange} rows="4" placeholder="¿En qué podemos ayudarte?" required className={styles.input} disabled={status.loading}></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status.loading}>
              {status.loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
