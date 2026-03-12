import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ConectarCalendario from './pages/ConectarCalendario';
import Inicio from './pages/Inicio';
import Planeacion from './pages/Planeacion';
import Alarmas from './pages/Alarmas';
import ConfigurarAlarma from './pages/ConfigurarAlarma';
import Historial from './pages/Historial';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/conectar-calendario" element={<ConectarCalendario />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/planeacion" element={<Planeacion />} />
        <Route path="/alarmas" element={<Alarmas />} />
        <Route path="/alarmas/nueva" element={<ConfigurarAlarma />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
