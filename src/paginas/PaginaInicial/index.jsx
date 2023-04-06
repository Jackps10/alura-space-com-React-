import React, { Fragment } from 'react';
import banner from './banner.png';
import styles from './PaginaInicial.module.scss';
import Cabecalho from 'componentes/Cabecalho';
import Menu from 'componentes/Menu';
import Rodape from 'componentes/Rodape';
import Galeria from 'componentes/Galeria';
import Populares from 'componentes/Populares';


 const PaginaInicial = ()=> {
  return (
    <Fragment>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do esaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      
      <Rodape />
      
    </Fragment>
  )
}

export default PaginaInicial;