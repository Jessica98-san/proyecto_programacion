import { Link } from 'react-router-dom';

export const NotFoundPg = () => {
  return (
    <div className="pagina-notfound">
      <div className="notfound-contenedor">
        <div className="notfound-icono">⚽</div>
        <h1 className="notfound-titulo">404</h1>
        <h2 className="notfound-subtitulo">¡Fuera de juego!</h2>
        <p className="notfound-mensaje">
          La página que buscas no existe o ha sido movida.
          Parece que este balón salió del campo.
        </p>
        <div className="notfound-botones">
          <Link to="/" className="notfound-boton-principal">
            Volver al Inicio
          </Link>
          <Link to="/consulta" className="notfound-boton-secundario">
            Consultar Clima
          </Link>
        </div>
      </div>
    </div>
  );
};
