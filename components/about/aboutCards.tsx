'use client'
import SubHeadingContent from "../subHeading";
import styles from "../../app/css/about.module.css";
import AboutCardSingle from "./aboutCardss"



export default function AboutCards(){


    return (

        <>
        
        <SubHeadingContent 
               button="Our Team"
               heading="Meet the Minds Behind Smarkitals Technologies"
               subheading="We bring together technology and strategy to create smarter automation solutions." 
               />

        <div className={styles.aboutCards}>
            <AboutCardSingle heading="Manish Kulshrestha" suHeading="Founder Emeritus & Chief Advisor" imageSrc="sanket.jpg" linkDinLink=""/>
            <AboutCardSingle heading="Sanket Kulshrestha" suHeading="Chief Executive Officer & Founder" imageSrc="sanket.jpg" linkDinLink=""/>

      <AboutCardSingle heading="Poorvanshi Kulshreshtha" suHeading="Chief Operations Officer & Co-Founder" imageSrc="sanket.jpg" linkDinLink=""/>
    

        </div>






        
        
        </>



    )

}