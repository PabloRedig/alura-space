import React from 'react'
import styles from './Menu.module.scss'

import home from '../../assets/icones/home-ativo.png'
import maisCurtidasInativo from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistasInativo from '../../assets/icones/mais-vistas-inativo.png'
import novasInativo from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidasInativo} alt="" />
                <a href="">Mais Curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistasInativo} alt="" />
                <a href="">Mais Vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novasInativo} alt="" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="" />
                <a href="">Surpreenda-me</a>
            </li>            
        </ul>
    </nav>
  )
}
