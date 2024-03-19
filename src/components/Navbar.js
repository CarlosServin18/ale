import React, { useState } from 'react';
import './Navbar.css'; // Asegúrate de que este archivo existe y está en la ruta correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleNav}>Menú</button>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/gramatica">Gramática</a></li>
        <li><a href="/vocabulario">Vocabulario</a></li>
        <li><a href="/ejercicios">Ejercicios</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
