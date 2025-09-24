'use client'
import styles from '../css/nav.module.css';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Reference to the nav container

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after click
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.mainNav} ref={navRef}>
      {/* Left (Logo) */}
      <div className={styles.left}>
        <Image
          src="/logo.png"
          width={100}
          height={50}
          alt="Smarkitals Technologies"
        />
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop / Mobile Menu */}
      <div className={`${styles.right} ${isOpen ? styles.open : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
        <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a>
        <a className={styles.navButton} href="mailto:info@smarkitalstech.com" target="_blank">Book a call</a>
      </div>
    </div>
  );
}
