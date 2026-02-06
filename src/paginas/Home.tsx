import { Link } from 'react-router-dom';

export const HomePg = () => {
  return (
    <div className="pagina-home">
      <div className="home-hero">
        <div className="home-hero-contenido">
          <h1 className="home-titulo">⚽ Clima Mundial 2026 ⚽</h1>
          <p className="home-subtitulo">
            Conoce el clima de las ciudades sede del Mundial FIFA 2026
          </p>
          <div className="home-descripcion">
            <p>
              El Mundial de Fútbol 2026 será un evento histórico organizado por primera vez
              por tres países: México, Canadá y Estados Unidos. Consulta el clima actual
              de todas las ciudades sede para planificar tu viaje.
            </p>
          </div>
          <Link to="/consulta" className="home-boton-principal">
            Consultar Clima Ahora
          </Link>
        </div>
      </div>

      <div className="home-info-grid">
        <div className="home-info-tarjeta">
          <div className="info-icono">🇲🇽</div>
          <h3 className="info-titulo">México</h3>
          <p className="info-descripcion">3 ciudades sede</p>
          <ul className="info-lista">
            <li>Ciudad de México</li>
            <li>Guadalajara</li>
            <li>Monterrey</li>
          </ul>
        </div>

        <div className="home-info-tarjeta">
          <div className="info-icono">🇨🇦</div>
          <h3 className="info-titulo">Canadá</h3>
          <p className="info-descripcion">2 ciudades sede</p>
          <ul className="info-lista">
            <li>Toronto</li>
            <li>Vancouver</li>
          </ul>
        </div>

        <div className="home-info-tarjeta">
          <div className="info-icono">🇺🇸</div>
          <h3 className="info-titulo">Estados Unidos</h3>
          <p className="info-descripcion">11 ciudades sede</p>
          <ul className="info-lista">
            <li>New York/New Jersey</li>
            <li>Los Angeles</li>
            <li>Dallas</li>
            <li>Y 8 ciudades más...</li>
          </ul>
        </div>
      </div>

      <div className="home-caracteristicas">
        <h2 className="caracteristicas-titulo">¿Qué puedes hacer?</h2>
        <div className="caracteristicas-grid">
          <div className="caracteristica-item">
            <span className="caracteristica-emoji">🌡️</span>
            <h3>Temperatura en Tiempo Real</h3>
            <p>Consulta la temperatura actual y sensación térmica de cada ciudad</p>
          </div>
          <div className="caracteristica-item">
            <span className="caracteristica-emoji">🌍</span>
            <h3>16 Ciudades Sede</h3>
            <p>Accede al clima de todas las ciudades que recibirán partidos del Mundial</p>
          </div>
          <div className="caracteristica-item">
            <span className="caracteristica-emoji">💨</span>
            <h3>Información Detallada</h3>
            <p>Conoce humedad, velocidad del viento y condiciones meteorológicas</p>
          </div>
          <div className="caracteristica-item">
            <span className="caracteristica-emoji">⚡</span>
            <h3>Consulta Rápida</h3>
            <p>Obtén el clima de todas las ciudades de un país con un solo clic</p>
          </div>
        </div>
      </div>

      <div className="home-cta">
        <h2 className="cta-titulo">¿Listo para planificar tu viaje al Mundial?</h2>
        <p className="cta-descripcion">
          Comienza a consultar el clima de las ciudades sede ahora mismo
        </p>
        <Link to="/consulta" className="home-boton-secundario">
          Ir a Consultar Clima
        </Link>
      </div>
    </div>
  );
};
