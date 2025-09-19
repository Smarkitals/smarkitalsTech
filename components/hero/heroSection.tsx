'use client'
import style from "../../app/css/hero.module.css";


interface heroContent{
    idScroll:string,
    heading:string,
    subHeading:string,
    getInTouchButton:string,
    vewServicesButton:string


}

export default function HeroSection({idScroll, heading , subHeading , getInTouchButton, vewServicesButton} :heroContent){

   
      const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
   
    }
  };


    return(
        <div className={style.main}>
            <h2 className={style.heading}>
                {heading}
            </h2>
            <p className={style.subHeading}>
{subHeading}
            </p>
            <div className={style.button}>

                {getInTouchButton && 
            (<button className={style.getInTouchButton}>
                {getInTouchButton}
            </button>)
                }
                {idScroll && 
           ( <button onClick={(e) => { e.preventDefault(); scrollToSection(idScroll); }} className={style.vewServicesButton}>
                {vewServicesButton}
            </button>)
                }
            </div>
        </div>
    )
}