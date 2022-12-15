import React from 'react'
import { Body1 } from './components/BodyPantalla1/Body1'
import { Header } from './components/Header/Header'
import styles from './Styles/App.module.css'

export const App = () => {
  return (
    <div className={styles.bodya} >
        <Header />
        <Body1/>
    </div>
  )
}

