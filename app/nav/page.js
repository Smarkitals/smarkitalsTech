import styles from "../css/nav.module.css"
import Image from "next/image";


export default function Footer(){

    return (
        <div className={styles.footerMain} >
             <div className={styles.footerMainTop} >
                <div className={styles.footerMainTopLeft} >
                    <Image
                    src='/logo.png' 
                    width={200}
                    height={50}
                    alt="Smarkitals Technologies"
                    />
                </div>
                <div className={styles.footerMainTopRight} >

                    {/* <div className={styles.footerMainTopRightGridColumns}>

                    </div>
                    <div className={styles.footerMainTopRightGridColumns}>

                    </div> */}
                    <div className={styles.footerMainTopRightGridColumns}>
                            <a href="">Instagram</a>
                            <a href="">Facebook</a>
                            <a href="">Linkedin</a>
                            <a href="">Twitter</a>
                    </div>

                </div>

             </div>
             <hr />
              <div className={styles.footerMainBottom} >
                    &copy;All rights Reserved to FinestMosaic69
              </div>

        </div>
    )
}