import React from 'react'
import styles from '../../Styles/Header.module.css'


import carrito from '../../assets/carrito2.svg'
import face from '../../assets/face.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/instagram.svg'
import Dribbble from '../../assets/Dribble.svg'
import lupa from '../../assets/lupa.svg'

export const Header = () => {
  return (
    <div className={styles.general} >
        <div className={`${styles.principal} col-10`}>

            <div className={`${styles.horizontalsuperior }` } >                
                <div className={`${styles.horizontal }` }>
                    <span>+1 212 546 2700</span>
                    <span>Help Desk</span>
                    <span>Why Sway</span>
                </div>
                <div className={styles.redes} >
                    <img src={face} alt="" />
                    <img src={twitter} alt="" />
                    <img src={insta} alt="" />
                    <img src={Dribbble} alt="" />
                    
                </div>
            </div>

            <div className={styles.vertical}>
                <div>
                    <span> LIBEL ACADEMY </span>
                </div>
                <div className={`${styles.horizontalInferior }`} >
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Pricing</span>
                    <span>Products</span>
                    <span>News</span>
                    <img className={styles.carrito} src={carrito} alt="" />
                    <img  className={styles.lupa} src={lupa} alt="" />  
                    <button className={styles.boton} >Contact Us</button>
                </div>
            </div>


        </div>    
    </div>
  )
}
