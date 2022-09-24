import React from 'react';
import '../hojas-de-estilo/CartWidget.css';
import { BsCart4 } from 'react-icons/bs';

function CartWidget() {
  return (
    <div className='contenedor-principal-carrito'>        
      
      <BsCart4 className='icon-cart'/>   

    </div>
  );
}

export default CartWidget;