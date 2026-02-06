interface SelectorCiudadProps {
  ciudades: string[];
  ciudadSeleccionada: string;
  onSeleccionarCiudad: (ciudad: string) => void;
  onConsultarTodasCiudades: () => void;
  deshabilitado: boolean;
}

export const SelectorCiudad = ({
  ciudades,
  ciudadSeleccionada,
  onSeleccionarCiudad,
  onConsultarTodasCiudades,
  deshabilitado,
}: SelectorCiudadProps) => {
  return (
    <div className="selector-contenedor">
      <label htmlFor="selector-ciudad" className="selector-etiqueta">
        Selecciona una Ciudad:
      </label>
      <div className="selector-grupo">
        <select
          id="selector-ciudad"
          className="selector"
          value={ciudadSeleccionada}
          onChange={(e) => onSeleccionarCiudad(e.target.value)}
          disabled={deshabilitado}
        >
          <option value="">-- Selecciona una ciudad --</option>
          {ciudades.map((ciudad) => (
            <option key={ciudad} value={ciudad}>
              {ciudad}
            </option>
          ))}
        </select>
        <button
          className="boton-todas-ciudades"
          onClick={onConsultarTodasCiudades}
          disabled={deshabilitado || ciudades.length === 0}
        >
          Ver todas las ciudades
        </button>
      </div>
    </div>
  );
};