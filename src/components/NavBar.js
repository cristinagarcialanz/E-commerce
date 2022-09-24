import React from 'react';
import '../hojas-de-estilo/NavBar.css';
import logo from '../imagenes/logo.png';
import Contador from './Contador.js'
import CartWidget from './CartWidget.js';
import Boton from './Boton.js';
import { useState } from 'react';

function NavBar(props) {
  
  const sumarClic = () => {
    console.log('Clic');
    setNumClics(numClics + 1);
  }
  
  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  }

  const [numClics, setNumClics] = useState(0);
  
  return(
    <div className='contenedor-principal'>

      <div className='contenedor-logotipo'>
        <img className='logotipo'
        src={logo} 
        alt='imagen del logo'
        />
      </div>

      <div className='menu-navegacion'>
        <ul className='lista'>
          <li><a className='item-lista' href={`./pages/${props.pagina1}.html`}>{props.pagina1}</a></li>
          <li><a className='item-lista' href={`./pages/${props.pagina2}.html`}>{props.pagina2}</a></li>
          <li><a className='item-lista' href={`./pages/${props.pagina3}.html`}>{props.pagina3}</a></li>
          <li><a className='item-lista' href={`./pages/${props.pagina4}.html`}>{props.pagina4}</a></li>
          <li><a className='item-lista' href={`./pages/${props.pagina5}.html`}>{props.pagina5}</a></li>        
        </ul>
      </div>

      <div className='contenedor-carrito-contador' >
        <CartWidget /> 
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true} 
          manejarClic={sumarClic} />
        <Boton 
        texto='Reset'
        esBotonDeClic={false} 
        manejarClic={reiniciarContador} />
        </div>        

    </div>
  )
}
export default NavBar;