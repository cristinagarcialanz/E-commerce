import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App({children}) {
  return (
    <div className="App">

      <header className='navbar'>
      <NavBar 
      pagina1 = 'Home'
      pagina2 = 'Nosotos'
      pagina3 = 'Servicios'
      pagina4 = 'Testimonios'
      pagina5 = 'Contactos' />      
      
      <ItemListContainer greeting= '¡Bienvenidos! Gracias por distinguirnos y visitarnos' />
      </header>

      <body className='tienda-libros' >
        <h1> Tienda de Libros onLine</h1>
      </body>

    </div>
  );
}

export default App;
