const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const obtenerUrlIcono = (codigoIcono: string): string => {
  return `/api/icons/${codigoIcono}@2x.png`;
};

export interface DatosClima {
  temperatura: number;
  sensacionTermica: number;
  descripcion: string;
  icono: string;
  humedad: number;
  velocidadViento: number;
  ciudad: string;
  pais: string;
}

export const obtenerClimaCiudad = async (ciudad: string): Promise<DatosClima> => {
  try {
    const respuesta = await fetch(
      `/api/weather/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
    );

    if (!respuesta.ok) {
      throw new Error('No se pudo obtener el clima de la ciudad');
    }

    const datos = await respuesta.json();

    return {
      temperatura: Math.round(datos.main.temp),
      sensacionTermica: Math.round(datos.main.feels_like),
      descripcion: datos.weather[0].description,
      icono: datos.weather[0].icon,
      humedad: datos.main.humidity,
      velocidadViento: Math.round(datos.wind.speed * 3.6), //KM/h
      ciudad: datos.name,
      pais: datos.sys.country,
    };
  } catch (error) {
    console.error('Error al obtener clima:', error);
    throw error;
  }
};
