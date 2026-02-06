interface SelectorPaisProps {
  paises: string[];
  paisSeleccionado: string;
  onSeleccionarPais: (pais: string) => void;
}

export const SelectorPais = ({
  paises,
  paisSeleccionado,
  onSeleccionarPais,
}: SelectorPaisProps) => {
  return (
    <div className="selector-contenedor">
      <label htmlFor="selector-pais" className="selector-etiqueta">
        Selecciona un País:
      </label>
      <select
        id="selector-pais"
        className="selector"
        value={paisSeleccionado}
        onChange={(e) => onSeleccionarPais(e.target.value)}
      >
        <option value="">-- Selecciona un país --</option>
        {paises.map((pais) => (
          <option key={pais} value={pais}>
            {pais}
          </option>
        ))}
      </select>
    </div>
  );
};