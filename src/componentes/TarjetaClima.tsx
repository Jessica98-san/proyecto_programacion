import type { DatosClima } from '../servicios/ServicioOpenWeather';

interface TarjetaClimaProps {
  datosClima: DatosClima;
}

export const TarjetaClima = ({ datosClima }: TarjetaClimaProps) => {
  return (
    <div className="tarjeta-clima">
      <div className="tarjeta-encabezado">
        <h2 className="tarjeta-ciudad">{datosClima.ciudad}</h2>
        <span className="tarjeta-pais">{datosClima.pais}</span>
      </div>

      <div className="tarjeta-principal">
        {/*// URL de OpenWeatherMap para obtener iconos del clima correspondiente. Rewrite aplicado */}
        <img
          src={`/api/icons/${datosClima.icono}@4x.png`}
          alt={datosClima.descripcion}
          className="tarjeta-icono"
        />
        <div className="tarjeta-temperatura">
          <span className="temperatura-numero">{datosClima.temperatura}</span>
          <span className="temperatura-simbolo">°C</span>
        </div>
      </div>

      <p className="tarjeta-descripcion">{datosClima.descripcion}</p>

      <div className="tarjeta-detalles">
        <div className="detalle-item">
          <span className="detalle-etiqueta">Sensación térmica:</span>
          <span className="detalle-valor">{datosClima.sensacionTermica}°C</span>
        </div>
        <div className="detalle-item">
          <span className="detalle-etiqueta">Humedad:</span>
          <span className="detalle-valor">{datosClima.humedad}%</span>
        </div>
        <div className="detalle-item">
          <span className="detalle-etiqueta">Viento:</span>
          <span className="detalle-valor">{datosClima.velocidadViento} km/h</span>
        </div>
      </div>
    </div>
  );
}; 