"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import styles from "./HeroSliderV2.module.css";

const slides = [
  {
    id: 1,
    num: "01",
    bg: "/images/hero_corn_field.png",
    eyebrow: "Calidad Superior",
    title: ["Del Campo", "a tu Negocio,", "Sin Intermediarios."],
    subtitle: "Maíz de la más alta calidad, procesado con experiencia y directo del productor para el máximo rendimiento.",
    cta: "Contáctanos",
    ctaLink: "#contacto",
    ctaAlt: "Ver Productos",
    ctaAltLink: "#productos",
  },
  {
    id: 2,
    num: "02",
    bg: "/images/processing.png",
    eyebrow: "Procesamiento Premium",
    title: ["Tecnología y", "Tradición en", "Cada Grano."],
    subtitle: "Nuestro proceso garantiza pureza, consistencia y calidad en cada presentación de 25 kg y 40 kg.",
    cta: "Conocer el Proceso",
    ctaLink: "#nosotros",
    ctaAlt: "Ver Productos",
    ctaAltLink: "#productos",
  },
  {
    id: 3,
    num: "03",
    bg: "/images/corn_quality_control.png",
    eyebrow: "Producción Propia",
    title: ["Maíz Fresco", "de la Mejor", "Tierra de Chihuahua."],
    subtitle: "Controlamos el origen. Sembramos, cosechamos y procesamos con la certeza de que lo que recibes es lo mejor del campo.",
    cta: "Contacto",
    ctaLink: "#contacto",
    ctaAlt: "Explorar Productos",
    ctaAltLink: "#productos",
  },
];

const DURATION = 7000;

export default function HeroSliderV2() {
  const [current, setCurrent] = useState(0);
  const [textKey, setTextKey] = useState(0); // forces re-animation on slide change
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent(index);
    setTextKey((k) => k + 1);
    setProgress(0);
  }, []);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);
    setProgress(0);

    let elapsed = 0;
    const tick = 50;
    progressRef.current = setInterval(() => {
      elapsed += tick;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, tick);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setTextKey((k) => k + 1);
        return next;
      });
      elapsed = 0;
      setProgress(0);
    }, DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [startTimer]);

  const handleDot = (index) => {
    goTo(index);
    startTimer();
  };

  const slide = slides[current];

  return (
    <section id="inicio" className={styles.hero}>
      {/* ── Right panel: image ── */}
      <div className={styles.imagePanel}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.bgLayer} ${i === current ? styles.bgVisible : ""}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        ))}
        <div className={styles.imageTint} />
      </div>

      {/* ── Left panel: content ── */}
      <div className={styles.contentPanel}>
        {/* Giant ghost slide number */}
        <div className={styles.ghostNum} aria-hidden="true" key={`num-${textKey}`}>
          {slide.num}
        </div>

        {/* Text content – re-keyed to trigger entrance animation */}
        <div className={styles.textContent} key={`text-${textKey}`}>
          <span className={`${styles.eyebrow} ${styles.anim1}`}>{slide.eyebrow}</span>

          <h1 className={styles.title}>
            {slide.title.map((line, i) => (
              <span
                key={i}
                className={`${styles.titleLine} ${styles[`anim${i + 2}`]}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className={`${styles.subtitle} ${styles.anim5}`}>{slide.subtitle}</p>

          <div className={`${styles.ctaRow} ${styles.anim6}`}>
            <a href={slide.ctaLink} className={styles.btnPrimary}>{slide.cta}</a>
            <a href={slide.ctaAltLink} className={styles.btnGhost}>{slide.ctaAlt}</a>
          </div>
        </div>

        {/* Slide progress indicators */}
        <div className={styles.indicators}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.indicator} ${i === current ? styles.indicatorActive : ""}`}
              onClick={() => handleDot(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <span className={styles.indicatorLabel}>{s.num}</span>
              <div className={styles.indicatorTrack}>
                <div
                  className={styles.indicatorFill}
                  style={{ width: i === current ? `${progress}%` : i < current ? "100%" : "0%" }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Sack mockup: bridges both panels ── */}
      <div className={styles.sackBridge}>
        <div className={styles.sackGlow} />
        <Image
          src="/images/costal_40kg.png"
          alt="Costal Nutralmena 40kg"
          width={300}
          height={460}
          className={styles.sackMain}
          priority
        />
        <Image
          src="/images/costal_25kg.png"
          alt="Costal Nutralmena 25kg"
          width={200}
          height={305}
          className={styles.sackSide}
        />
      </div>
    </section>
  );
}
