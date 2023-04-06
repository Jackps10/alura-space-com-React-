import React from 'react';
import logo from './logo.png';
import search from './search.png';
import styles from './Cabecalho.module.scss';

// import { Container } from './styles';

const Cabecalho =() => {
  return (
    <header className={styles.cabecalho}>
        <img src={logo} alt="logo do Alura Space" />
        <div className={styles.cabecalho__container}>
            <input className={styles.cabecalho__input} type="text" placeholder='o que você procura?'/>
            <img src={search} alt="icone de lupa" />
        </div>
    </header>
  )
}

export default Cabecalho;