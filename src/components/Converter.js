import React, { useState } from 'react'; // Importa la biblioteca de React y el hook useState
import UnitSelector from './UnitSelector'; // Importa el componente UnitSelector desde el archivo UnitSelector.js

// Definición del componente funcional Converter
const Converter = () => {
  // Definición de estados utilizando el hook useState
  const [inputValue, setInputValue] = useState(''); // Estado para el valor de entrada
  const [outputValue, setOutputValue] = useState(''); // Estado para el valor de salida
  const [inputUnit, setInputUnit] = useState('metros'); // Estado para la unidad de entrada
  const [outputUnit, setOutputUnit] = useState('kilometros'); // Estado para la unidad de salida

  // Función para manejar el cambio en el valor de entrada
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor de entrada
    convertUnits(e.target.value, inputUnit, outputUnit); // Convierte las unidades
  };

  // Función para manejar el cambio en la unidad de entrada
  const handleInputUnitChange = (unit) => {
    setInputUnit(unit); // Actualiza la unidad de entrada
    convertUnits(inputValue, unit, outputUnit); // Convierte las unidades
  };

  // Función para manejar el cambio en la unidad de salida
  const handleOutputUnitChange = (unit) => {
    setOutputUnit(unit); // Actualiza la unidad de salida
    convertUnits(inputValue, inputUnit, unit); // Convierte las unidades
  };

  // Función para convertir las unidades
  const convertUnits = (value, fromUnit, toUnit) => {
    let convertedValue = value; // Inicializa el valor convertido con el valor de entrada

    // Realiza la conversión según las unidades seleccionadas
    if (fromUnit === 'metros' && toUnit === 'kilometros') {
      convertedValue = value / 1000; // Convierte de metros a kilómetros
    } else if (fromUnit === 'kilometros' && toUnit === 'metros') {
      convertedValue = value * 1000; // Convierte de kilómetros a metros
    }

    setOutputValue(convertedValue); // Actualiza el valor de salida
  };

  // Renderiza el componente
  return (
    <div className="convertir">
      {/* Input para el valor de entrada */}
      <input type="number" value={inputValue} onChange={handleInputChange} />
      
      {/* Selector de unidad de entrada */}
      <UnitSelector selectedUnit={inputUnit} onUnitChange={handleInputUnitChange} />

      {/* Signo igual */}
      <span>=</span>

      {/* Input para el valor de salida (solo lectura) */}
      <input type="number" value={outputValue} readOnly />
      
      {/* Selector de unidad de salida */}
      <UnitSelector selectedUnit={outputUnit} onUnitChange={handleOutputUnitChange} />
    </div>
  );
};

export default Converter; // Exporta el componente Converter para su uso en otras partes de la aplicación
