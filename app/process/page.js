'use client'
import styles from "../css/process.module.css";

import SubHeadingContent from "../../components/subHeading";
import ProcessCard from "../../components/processCard";




export default function Process() {

    return (
        <div className={styles.main}>
            <SubHeadingContent
                button="Our Process"
                heading="Our Simple, Smart, and Scalable Process"
                subheading="We design, develop, and implement automation tools that help you work smarter, not harder" />

            <div className={styles.processCards}>

                <ProcessCard
                    step="1"
                    heading="Business Need Analysis"
                    subHeading="We assess your current operations, map bottlenecks and identify areas where tech can maximize efficiency"
                />


                <ProcessCard
                    step="2"
                    heading="Solution Blueprinting"
                    subHeading="Our team creates tailored system designs and selects the right tools to match your business needs."
                />



                <ProcessCard
                    step="3"
                    heading="Smart Development & Automation"
                    subHeading="We build intelligent, automation-driven solutions that replace manual work with system-based workflows."
                />


                <ProcessCard
                    step="4"
                    heading="Seamless Integration"
                    subHeading="We integrate new solutions into your existing infrastructure. ensuring zero disruption to ongoing operations."
                />


                <ProcessCard
                    step="5"
                    heading="Testing & Validation"
                    subHeading="Every solution undergoes audit-grade testing for accuracy, reliability, and compliance before rollout."
                />



                <ProcessCard
                    step="6"
                    heading="Continuous Optimization"
                    subHeading="We monitor, analyze, and enhance performance over time to deliver sustained savings and long-term ROI."
                />




          

            </div>



        </div>
    );
}

