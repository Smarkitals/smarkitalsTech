'use client'
import styles from '../css/nav.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav(){
     const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.mainNav}>

            <div className={styles.left}>
                 <Image
                                    src='/logo.png' 
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

            {/* Desktop Menu */}
            <div className={`${styles.right} ${isOpen ? styles.open : ''}`}>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="blog">Blog</a>
                <a href="contact">Contact</a>
                <a className={styles.navButton} href="">Book a call</a>
            </div>
        </div>



  
    )
}