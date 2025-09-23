import styles from "../app/css/process.module.css";
import Image from "next/image";

interface process {
    step: string;
    heading: string;
    subHeading: string;
    imgPath:string;
}


export default function ProcessCard({ step, heading, subHeading, imgPath }: process) {
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
                <Image src={`/temp/${imgPath}`}
                    height={350}
                    width={350}
                    alt="Process Card image"
                />
            </div>

        </div>

    )
}