import { Outlet } from 'react-router-dom';
import { Navegacion } from './Navegacion';

export const Layout = () => {
  return (
    <div className="app-contenedor">
      <Navegacion />
      <main className="app-principal">
        <Outlet />
      </main>
      <footer className="app-pie">
        <p>Mundial FIFA 2026 - México, Canadá y Estados Unidos</p>
      </footer>
    </div>
  );
};
