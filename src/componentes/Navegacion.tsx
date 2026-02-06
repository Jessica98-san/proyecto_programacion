import { Link, useLocation } from 'react-router-dom';

export const Navegacion = () => {
  const location = useLocation();

  const esRutaActiva = (ruta: string) => {
    return location.pathname === ruta;
  };

  return (
    <nav className="navegacion">
      <div className="navegacion-contenedor">
        <Link to="/" className="navegacion-logo">
          <span className="logo-icono">⚽</span>
          <span className="logo-texto">Mundial 2026</span>
        </Link>

        <div className="navegacion-enlaces">
          <Link
            to="/"
            className={`nav-enlace ${esRutaActiva('/') ? 'activo' : ''}`}
          >
            Inicio
          </Link>
          <Link
            to="/consulta"
            className={`nav-enlace ${esRutaActiva('/consulta') ? 'activo' : ''}`}
          >
            Consultar Clima
          </Link>
        </div>
      </div>
    </nav>
  );
};
