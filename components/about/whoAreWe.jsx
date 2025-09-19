'use client'
import SubHeadingContent from "../subHeading";
import BenefitsCard from "../benefitCards";
import styles from "../../app/css/whoAreWe.module.css";



export default function WhoAreFree(){
    return(
<div className={styles.whoMain}>

        <SubHeadingContent 
        button="Who We Are"
        heading="Who We Are"
        subheading="Smarkitals is a team of innovators dedicated to making automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, driven solutions." 
        />

<div className={styles.WhoAreFreeCardss}>

<BenefitsCard 
 heading=" 10+ Renowned Enterprises"
subHeading="Our founders have worked with global leaders across technology, consulting, and manufacturing industries."
                            />

                            <BenefitsCard 
 heading=" 50+ Projects Delivered"
subHeading="From ERP automation to risk advisory, our leadership team has executed complex transformation projects across functions."
                            />

                            <BenefitsCard 
 heading=" 35+ years Combined Experience"
subHeading="Decades of expertise in financial strategy and process improvement through tech-driven solutions."
                            />



</div>


</div>


    )
}