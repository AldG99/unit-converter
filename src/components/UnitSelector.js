import React from 'react'; // Importa la biblioteca de React

// Definición del componente funcional UnitSelector
// Recibe dos props: selectedUnit (unidad seleccionada) y onUnitChange (función para manejar el cambio de unidad)
const UnitSelector = ({ selectedUnit, onUnitChange }) => {
  const units = ['metros', 'kilometros']; // Define un array con las unidades disponibles

  return (
    // Crea un elemento select con el valor predeterminado y un manejador de eventos onChange
    <select value={selectedUnit} onChange={(e) => onUnitChange(e.target.value)}>
      {/* Mapea las unidades a opciones dentro del select */}
      {units.map((unit) => (
        <option key={unit} value={unit}>{unit}</option> // Crea una opción para cada unidad con key y value
      ))}
    </select>
  );
};

export default UnitSelector; // Exporta el componente UnitSelector para su uso en otras partes de la aplicación
