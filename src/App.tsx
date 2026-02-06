import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./componentes/Layout";
import { HomePg } from "./paginas/Home";
import { ConsultaPg } from "./paginas/Consulta";
import { NotFoundPg } from "./paginas/NotFound";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePg />} />
          <Route path="consulta" element={<ConsultaPg />} />
          <Route path="*" element={<NotFoundPg />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
