import Image from "next/image";
import styles from "./Footer.module.css";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nuestra Historia" },
  { href: "#productos", label: "Catálogo de Productos" },
  { href: "#contacto", label: "Contacto y Pedidos" },
];

const contactItems = [
  { icon: Phone, label: "Teléfono", value: "+52 625 104 1330", href: "tel:+526251041330" },
  { icon: Mail, label: "Correo", value: "ventas@nutralmena.com", href: "mailto:ventas@nutralmena.com" },
  { icon: MapPin, label: "Ubicación", value: "Campo 106 Casa 111\nCuauhtémoc, Chih 31610", href: null },
  { icon: Clock, label: "Horario de atención", value: "Lun – Vie: 8:00 – 18:00\nSáb: 9:00 – 14:00", href: null },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Grain texture overlay */}
      <div className={styles.grain} aria-hidden="true" />

      {/* Top accent line */}
      <div className={styles.accentBar} aria-hidden="true" />

      {/* ── CTA Band ── */}
      <div className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <span className={styles.ctaEyebrow}>¿Listo para abastecer tu negocio?</span>
            <p className={styles.ctaHeadline}>Del campo a tu bodega, sin intermediarios.</p>
          </div>
          <a href="#contacto" className={styles.ctaBtn}>
            Solicitar cotización
            <ChevronRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className={`container ${styles.mainGrid}`}>

        {/* Brand column */}
        <div className={styles.brandCol}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo-footer.webp"
              alt="Nutralmena"
              width={200}
              height={55}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className={styles.tagline}>
            Maíz procesado con experiencia,<br />
            entregado con compromiso.
          </p>
          <div className={styles.brandStatement}>
            Del Campo<br />
            <em>a tu Negocio.</em>
          </div>
        </div>

        {/* Navigation column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  <span className={styles.navDot} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <ul className={styles.contactList}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className={styles.contactIcon}>
                    <Icon size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>
                      {item.value.split("\n").map((line, i) => (
                        <span key={i}>{line}{i < item.value.split("\n").length - 1 && <br />}</span>
                      ))}
                    </span>
                  </div>
                </>
              );
              return (
                <li key={item.label} className={styles.contactItem}>
                  {item.href ? (
                    <a href={item.href} className={styles.contactLink}>{content}</a>
                  ) : (
                    <div className={styles.contactLink}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Nutralmena. Todos los derechos reservados.
          </p>
          <p className={styles.credit}>
            Desarrollado por{" "}
            <a
              href="https://menteo.mx"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menteoLink}
            >
              Menteo.mx
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
