'use client'

import { useEffect } from 'react';
import style from "../../app/css/hero.module.css";

interface HeroContent {
  idScroll: string;
  heading: string;
  subHeading: string;
  getInTouchButton: string;
  vewServicesButton: string;
}

export default function HeroSection({
  idScroll,
  heading,
  subHeading,
  getInTouchButton,
  vewServicesButton,
}: HeroContent) {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1732.9657345411572,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "edge",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 7,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
        },
        retina_detect: false,
      });
    }
  }, []);

  return (
    <div className={style.main}>
      {/* Particles.js container */}
      <div id="particles-js" className={style.particlesContainer}></div>

      <h2 className={style.heading}>
        {heading}
      </h2>
      <p className={style.subHeading}>
        {subHeading}
      </p>
      <div className={style.button}>
        {getInTouchButton && (
          <button className={style.getInTouchButton}>
            {getInTouchButton}
          </button>
        )}
        {idScroll && (
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(idScroll);
            }}
            className={style.vewServicesButton}
          >
            {vewServicesButton}
          </button>
        )}
      </div>
    </div>
  );
}
