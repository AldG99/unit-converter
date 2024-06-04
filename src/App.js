import React from 'react'; // Importa la biblioteca de React
import Converter from './components/converter'; // Importa el componente Converter desde la carpeta components
import './styles/main.scss'; // Importa los estilos desde el archivo main.scss

// Definición del componente funcional App
const App = () => (
  <div className="App">
    <h1>Convertidor de Unidades</h1> // Título de la aplicación
    <Converter /> // Renderiza el componente Converter
  </div>
);

export default App; // Exporta el componente App para que pueda ser utilizado en otras partes de la aplicación
