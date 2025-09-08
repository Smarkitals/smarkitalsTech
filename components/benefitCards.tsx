import styles from "../app/css/benefits.module.css";
import Image from "next/image";

interface benefits{
    heading: string;
    subHeading:string;

}


export default function BenefitsCard({heading,subHeading}:benefits){
    return(
        <div className={styles.benefitsCard}>
                                    <Image 
                                    src="/temp/img3.png"
                                    alt="Image"
                                    height={25}
                                    width={25}
                                    />
                                    <h4>
                                       {heading}
                                    </h4>
                                    <p>
                                        {subHeading}
                                    </p>
                            </div>

    )
}