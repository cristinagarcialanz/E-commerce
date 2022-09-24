import React from 'react';
import '../hojas-de-estilo/ItemListContainer.css';


function ItemListContainer({ greeting}) {
  return (
    <div>        
      <p className='saludo'>{greeting}</p>
    </div>

  );
}
export default ItemListContainer;

