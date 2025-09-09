'use client'
import style from "../css/hero.module.css";

export default function Hero(){

      const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
   
    }
  };

    return(
        <div className={style.main}>
            <h2 className={style.heading}>
                We don&apos;t deliver tech.
We deliver profits through smarter systems
            </h2>
            <p className={style.subHeading}>
                From eliminating bottlenecks to automating workflows, we design systems that unlock hidden savings and turn them into profits for your business
            </p>
            <div className={style.button}>
            <button className={style.getInTouchButton}>
                Get In Touch
            </button>
            <button onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={style.vewServicesButton}>
                View Services
            </button>
            </div>
        </div>
    )
}