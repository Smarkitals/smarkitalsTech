import styles from "../app/css/process.module.css";
import Image from "next/image";

interface process {
    step: string;
    heading: string;
    subHeading: string;
}


export default function ProcessCard({ step, heading, subHeading }: process) {
    return (
        <div className={styles.processCard}>

            <div className={styles.processCardButton}>
                Step {step}

            </div>
            <div className={styles.processCardHeading}>
                <h4>
                    {heading}
                </h4>
                <p>
                    {subHeading}

                </p>
            </div>
            <div className={styles.processCardImg}>
                <Image src="/temp/img2.png"
                    height={350}
                    width={350}
                    alt="Process Card image"
                />
            </div>

        </div>

    )
}