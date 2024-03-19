import React from 'react';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import HomePage from './components/HomePage'; // Asegúrate de que la ruta sea correcta
import './App.css'; // Si tienes estilos globales en App.css

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
