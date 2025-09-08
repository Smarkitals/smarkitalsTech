import styles from "../app/css/services.module.css";
   import React from 'react';

interface myHeading{
    button:string;
    heading : string;
    subheading: string;
} 

export default function SubHeadingContent( {button , heading, subheading} : myHeading) {


    return (
        <div className={styles.main}>
            
 
         <div className={styles.serviceButton} >
                        {button}
                       
                    </div>
                    <div className={styles.headingMain} >
                        <h3>
                            {heading}
                        </h3>
                        <p className={styles.subHeading}>
                          {subheading}
                            </p>
                    </div>
                           </div>
    );
}