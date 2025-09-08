'use client'
import styles from "../css/services.module.css";
import SubHeadingContent from "../../components/subHeading";

import Image from "next/image";

export default function Service() {

        return (

                <div className={styles.main}>
                        <SubHeadingContent button="Our Services" heading="Smarter Solutions That Take Your Business to the Next Level" subheading="We design, develop, and implement automation tools that help you work smarter, not harder" />



                        <div className={styles.cards}>

                                <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                                <Image
                                                        src="/temp/img1.png"
                                                        alt="Service Image"
                                                        width={300}
                                                        height={300}
                                                />
                                        </div>
                                        <div className={styles.cardText}>
                                                <div className={styles.cardTextHeading}>
                                                        Operational Excellence & Automation
                                                </div>
                                                <div className={styles.cardTextSubHeading}>
                                                        Streamlining business workflows, reducing manual dependencies, and driving efficiency through smart automation.
                                                </div>

                                        </div>
                                </div>

                                <div className={styles.card}>

                                        <div className={styles.cardText}>
                                                <div className={styles.cardTextHeading}>
                                                        Supply Chain & Resource Optimization
                                                </div>
                                                <div className={styles.cardTextSubHeading}>
                                                        System-driven procurement, inventory, and resource planning that ensures availability, minimizes waste, and improves working capital.           </div>

                                        </div>

                                        <div className={styles.cardImage}>
                                                <Image
                                                        src="/temp/img1.png"
                                                        alt="Service Image"
                                                        width={300}
                                                        height={300}
                                                />
                                        </div>
                                </div>

                                <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                                <Image
                                                        src="/temp/img1.png"
                                                        alt="Service Image"
                                                        width={300}
                                                        height={300}
                                                />
                                        </div>
                                        <div className={styles.cardText}>
                                                <div className={styles.cardTextHeading}>
                                                        Financial Performance & Controls
                                                </div>
                                                <div className={styles.cardTextSubHeading}>
                                                        Enhancing cash flow, automating collections, and building finance processes that are transparent, compliant, and efficient.        </div>

                                        </div>
                                </div>

                                <div className={styles.card}>

                                        <div className={styles.cardText}>
                                                <div className={styles.cardTextHeading}>
                                                        Business Intelligence & Decision Enablement
                                                </div>
                                                <div className={styles.cardTextSubHeading}>
                                                        Transforming raw data into actionable insights with dashboards and reporting systems for informed leadership decisions.        </div>

                                        </div>
                                        <div className={styles.cardImage}>
                                                <Image
                                                        src="/temp/img1.png"
                                                        alt="Service Image"
                                                        width={300}
                                                        height={300}
                                                />
                                        </div>
                                </div>


                                <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                                <Image
                                                        src="/temp/img1.png"
                                                        alt="Service Image"
                                                        width={300}
                                                        height={300}
                                                />
                                        </div>
                                        <div className={styles.cardText}>
                                                <div className={styles.cardTextHeading}>
                                                        Enterprise Growth & Enablement Systems
                                                </div>
                                                <div className={styles.cardTextSubHeading}>
                                                        Technology-driven solutions for scalability, from client onboarding and compliance to customer engagement and enabling business growth.        </div>

                                        </div>
                                </div>





                        </div>
                </div>
        )

}