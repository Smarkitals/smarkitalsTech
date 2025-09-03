'use client'
import styles from '../css/nav.module.css';
import Image from 'next/image';

export default function Nav(){

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
            
            <div className={styles.right}>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="blog">Blog</a>
                <a href="contact">Contact</a>
                <a className={styles.navButton} href="">Book a call</a>

            </div>



        </div>
    )
}