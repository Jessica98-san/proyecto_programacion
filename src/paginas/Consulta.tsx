import { useState, useEffect } from 'react';
import { sedesMundial2026 } from '../datos/datos';
import { obtenerClimaCiudad } from '../servicios/ServicioOpenWeather';
import type { DatosClima } from '../servicios/ServicioOpenWeather';
import { SelectorPais } from '../componentes/SelectorPais';
import { SelectorCiudad } from '../componentes/SelectorCiudad';
import { TarjetaClima } from '../componentes/TarjetaClima';
import { Cargando } from '../componentes/Cargando';

export const ConsultaPg = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState<string>('');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState<string>('');
  const [datosClima, setDatosClima] = useState<DatosClima[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Obtener lista única de países
  const paises = Array.from(new Set(sedesMundial2026.map((sede) => sede.pais)));

  // Obtener ciudades del país seleccionado
  const ciudadesDelPais = sedesMundial2026
    .filter((sede) => sede.pais === paisSeleccionado)
    .map((sede) => sede.ciudad);

  // Resetear ciudad seleccionada cuando cambia el país
  useEffect(() => {
    setCiudadSeleccionada('');
    setDatosClima([]);
    setError('');
  }, [paisSeleccionado]);

  // Consultar clima de una ciudad específica
  const consultarClimaCiudad = async (ciudad: string) => {
    if (!ciudad) return;

    setCargando(true);
    setError('');
    setDatosClima([]);

    try {
      const datos = await obtenerClimaCiudad(ciudad);
      setDatosClima([datos]);
    } catch (err) {
      setError('No se pudo obtener el clima de la ciudad. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  // Consultar clima de todas las ciudades del país
  const consultarTodasCiudades = async () => {
    if (ciudadesDelPais.length === 0) return;

    setCargando(true);
    setError('');
    setDatosClima([]);

    try {
      const promesas = ciudadesDelPais.map((ciudad) => obtenerClimaCiudad(ciudad));
      const resultados = await Promise.allSettled(promesas);

      const datosExitosos = resultados
        .filter((resultado) => resultado.status === 'fulfilled')
        .map((resultado) => (resultado as PromiseFulfilledResult<DatosClima>).value);

      if (datosExitosos.length === 0) {
        setError('No se pudo obtener el clima de ninguna ciudad.');
      } else {
        setDatosClima(datosExitosos);
      }
    } catch (err) {
      setError('Ocurrió un error al consultar las ciudades.');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  // Manejar selección de país
  const manejarSeleccionPais = (pais: string) => {
    setPaisSeleccionado(pais);
  };

  // Manejar selección de ciudad
  const manejarSeleccionCiudad = (ciudad: string) => {
    setCiudadSeleccionada(ciudad);
    consultarClimaCiudad(ciudad);
  };

  return (
    <div className="pagina-consulta">
      <div className="consulta-encabezado">
        <h1 className="consulta-titulo">Consultar Clima</h1>
        <p className="consulta-descripcion">
          Selecciona un país y una ciudad para ver el clima actual
        </p>
      </div>

      <div className="selectores-contenedor">
        <SelectorPais
          paises={paises}
          paisSeleccionado={paisSeleccionado}
          onSeleccionarPais={manejarSeleccionPais}
        />

        <SelectorCiudad
          ciudades={ciudadesDelPais}
          ciudadSeleccionada={ciudadSeleccionada}
          onSeleccionarCiudad={manejarSeleccionCiudad}
          onConsultarTodasCiudades={consultarTodasCiudades}
          deshabilitado={!paisSeleccionado}
        />
      </div>

      {cargando && <Cargando />}

      {error && (
        <div className="error-mensaje">
          <p>{error}</p>
        </div>
      )}

      {!cargando && datosClima.length > 0 && (
        <div className="tarjetas-contenedor">
          {datosClima.map((datos, index) => (
            <TarjetaClima key={`${datos.ciudad}-${index}`} datosClima={datos} />
          ))}
        </div>
      )}
    </div>
  );
};
