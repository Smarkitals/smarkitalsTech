'use client'
import SubHeadingContent from "../subHeading";
import styles from "../../app/css/about.module.css";
import Image from "next/image";


interface aboutCards {
    imageSrc:string;
    heading:string;
    linkDinLink:string;
    suHeading:string;

}


export default function AboutCardSingle({imageSrc ,heading, linkDinLink, suHeading}:aboutCards){


    return(
       <div className={styles.aboutCard}>  
                <div className={styles.aboutCardTop}>
                    <Image src="/temp/img4.jpg" alt="About Image" height={500} width={300} /> 
                </div>
                <div className={styles.aboutCardBottom}>
                   
                        <h4>{heading}</h4>

                        {/* <a href="#"> in</a> */}

                        <p>{suHeading}</p>

                  

                    
                </div>

            </div>
    )
}