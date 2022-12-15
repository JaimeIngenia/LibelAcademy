import React from 'react'
import styles from '../../Styles/Body1.module.css'
import play from '../../assets/play.svg'


export const Body1 = () => {
  return (
    <div className={` ${styles.general  } ` } >
        <div className={`${styles.principal} col-10`}>
            <span>Empowering Startups</span>
            <span>Providing our clients with the strategic guidance to make the right technology and business decisions. <br /> We will help you develop the best operational processes for your startup.</span>
            <img src={play} alt="" />
        </div>
    </div>
  )
}
