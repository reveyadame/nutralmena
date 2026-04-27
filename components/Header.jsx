"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/images/logo-header.webp"
            alt="Nutralmena Logo"
            width={140}
            height={80}
            style={{ objectFit: 'contain' }}
            className={styles.logo}
          />
          <Image
            src="/images/logo-mobile.webp"
            alt="Nutralmena Logo"
            width={140}
            height={80}
            style={{ objectFit: 'contain' }}
            className={styles.logoMobile}
          />
        </Link>
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ""}`}>
          <a href="#inicio" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Inicio</a>
          <a href="#nosotros" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
          <a href="#productos" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Productos</a>
          <a href="#contacto" className={`btn btn-primary ${styles.contactBtn}`} onClick={() => setMobileMenuOpen(false)}>Contacto</a>
        </nav>
        <button className={`${styles.mobileToggle}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
