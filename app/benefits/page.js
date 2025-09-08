'use client'
import styles from "../css/benefits.module.css";

import SubHeadingContent from "../../components/subHeading";
import BenefitsCard from "../../components/benefitCards";

import Image from "next/image";


export default function Benefits(){

    return (
 <div className={styles.main}>
                        <SubHeadingContent button="Benifits" heading="The Key Benefits of automation  for Your Business Growth" subheading="Discover how Smarkitals enhances efficiency, reduces costs, and drives business growth with smarter, faster processes." />



                        <div className={styles.benefitsCards}>

                            <BenefitsCard 
                            heading=" Increased Productivity"
                            subHeading="Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
                            />


                             <BenefitsCard 
                            heading=" Better Customer Experience"
                            subHeading="Personalized  interactions improve response times, customer engagement, and overall satisfaction."
                            />


                             <BenefitsCard 
                            heading=" 24/7 Availability"
                            subHeading="Ubiqutous systems operate around the clock, ensuring seamless support and execution without downtime."
                            />


                             <BenefitsCard 
                            heading=" Cost Reduction"
                            subHeading="Automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
                            />


                             <BenefitsCard 
                            heading="Data-Driven Insights"
                            subHeading="Leveraging vast data sets to gain insights, identify trends, and make smarter, faster, and more accurate business decisions."
                            />


                             <BenefitsCard 
                            heading=" Scalability & Growth"
                            subHeading="Adapt to your business needs, allowing you to scale efficiently without increasing workload or costs."
                            />


{/* 
                            <div className={styles.benefitsCard}>
                                    <Image 
                                    src="/temp/img3.png"
                                    alt="Image"
                                    height={25}
                                    width={25}
                                    />
                                    <h4>
                                        Increased Productivity
                                    </h4>
                                    <p>
                                        Gain actionable insights with AI-driven analytics to improve decision-making and strategy.
                                    </p>
                            </div> */}

                        </div>

 </div>

    )
}