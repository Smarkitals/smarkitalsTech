'use client'
import style from "../css/hero.module.css";
import HeroSection from "../../components/hero/heroSection"

export default function Hero(){

      

    return(
        <HeroSection 
        heading="We don&apos;t deliver tech.We deliver profits through smarter systems"
        subHeading="From eliminating bottlenecks to automating workflows, we design systems that unlock hidden savings and turn them into profits for your business" 
        idScroll="service"
        getInTouchButton="Get In Touch"
        vewServicesButton="View Services"
        />
    
    )
}