import { Plus } from 'lucide-react';
import Navbar from '../components/Navbar';

const diasHeader = [
  { label: 'Lun', num: 2 },
  { label: 'Mar', num: 3 },
  { label: 'Mier', num: 4 },
  { label: 'Jue', num: 5 },
  { label: 'Vie', num: 6 },
  { label: 'Sáb', num: 7 },
];

const horas = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

const eventos = [
  { dia: 'Lun',  hora: '9:00',  titulo: 'Reunion de equipo', tipo: 'evento' },
  { dia: 'Mier', hora: '10:00', titulo: 'Reunion de equipo', tipo: 'evento' },
  { dia: 'Mier', hora: '11:00', titulo: 'Reunion de equipo', tipo: 'evento' },
  { dia: 'Mier', hora: '12:00', titulo: 'Alarma sugerida',   tipo: 'alarma_sugerida' },
  { dia: 'Jue',  hora: '8:00',  titulo: 'Alarma sugerida',   tipo: 'alarma_sugerida' },
  { dia: 'Vie',  hora: '14:00', titulo: 'Gym',               tipo: 'evento' },
  { dia: 'Vie',  hora: '17:00', titulo: 'Alarma sugerida',   tipo: 'alarma_sugerida' },
];

const sugerencias = [
  { titulo: 'Hidratación - Mié 12:00', razon: '2h libres antes de tu bloque de estudio' },
  { titulo: 'Meditación - jue 8:00',   razon: 'Sin eventos antes de las 9:00 am' },
  { titulo: 'R Semanal - Vie 17:00',   razon: '30 min libres para cerrar la semana' },
];

const waveHeader = {
  background: 'linear-gradient(135deg, #2F5BFF 0%, #6A5CFF 100%)',
  borderBottomLeftRadius: '50% 40px',
  borderBottomRightRadius: '50% 40px',
};

export default function Planeacion() {
  const getEvento = (dia, hora) => eventos.find(e => e.dia === dia && e.hora === hora);

  return (
    <div className="min-h-screen bg-[#F7F9FF] pb-20 md:pb-0 md:pt-[70px]">

      {/* ── MOBILE: wave header ── */}
      <div className="md:hidden flex items-end justify-center px-6 pt-14 pb-12" style={waveHeader}>
        <h1 className="text-3xl font-extrabold text-white">Planeación</h1>
      </div>

      {/* ── MOBILE content ── */}
      <div className="md:hidden px-4 pt-6 flex flex-col gap-5 pb-4">

        {/* Semana label */}
        <p className="text-sm text-gray-500">Semana del 2 – 7 de Marzo de 2025</p>

        {/* Calendar — scrollable horizontal */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm overflow-x-auto">
          <table className="text-xs border-collapse" style={{ minWidth: 480 }}>
            <thead>
              <tr>
                <th className="w-12 py-2 px-2 text-white text-xs font-bold text-center" style={{ backgroundColor: '#1E3AAE' }}>Hora</th>
                {diasHeader.map(d => (
                  <th key={d.label} className="py-2 px-1 text-white text-xs font-bold text-center min-w-[60px]" style={{ backgroundColor: '#1E3AAE' }}>
                    {d.label} {d.num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horas.map((hora) => (
                <tr key={hora} className="border-t border-gray-200">
                  <td className="py-2 px-2 text-xs text-gray-400 font-medium whitespace-nowrap align-top">{hora}</td>
                  {diasHeader.map(({ label }) => {
                    const ev = getEvento(label, hora);
                    return (
                      <td key={label} className="py-1 px-1 align-top border-l border-gray-100">
                        {ev && (
                          <div
                            className={`rounded-lg px-1 py-1 text-[10px] font-semibold leading-tight w-full ${
                              ev.tipo === 'evento' ? 'text-white' : 'border border-dashed bg-[#F0EEFF] text-[#6A5CFF]'
                            }`}
                            style={ev.tipo === 'evento' ? { backgroundColor: '#8B7FFF' } : { borderColor: '#8B7FFF' }}
                          >
                            {ev.titulo}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sugerencias */}
        <div>
          <div className="rounded-t-xl px-4 py-3" style={{ backgroundColor: '#1E3AAE' }}>
            <h2 className="text-white font-bold text-sm">Sugerencias de pulse</h2>
          </div>
          <div className="bg-white rounded-b-xl border border-t-0 border-gray-200 shadow-sm divide-y divide-gray-100">
            {sugerencias.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-4">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{s.titulo}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.razon}</p>
                </div>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0 cursor-pointer" style={{ backgroundColor: '#6A5CFF' }}>
                  <Plus size={18} strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:flex gap-6 items-start px-6 py-8 max-w-[1400px] mx-auto">

        {/* LEFT: Calendar */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-extrabold mb-1" style={{ color: '#1E3AAE' }}>
            Planeación Semanal
          </h1>
          <p className="text-sm text-gray-500 mb-5">Semana del 2 – 7 de Marzo de 2025</p>

          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="w-16 py-3 px-3 text-white text-xs font-bold text-center" style={{ backgroundColor: '#1E3AAE' }}>Hora</th>
                  {diasHeader.map(d => (
                    <th key={d.label} className="py-3 px-2 text-white text-xs font-bold text-center" style={{ backgroundColor: '#1E3AAE' }}>
                      {d.label} {d.num}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horas.map((hora) => (
                  <tr key={hora} className="border-t border-gray-200">
                    <td className="py-3 px-3 text-xs text-gray-400 font-medium whitespace-nowrap align-top">{hora}</td>
                    {diasHeader.map(({ label }) => {
                      const ev = getEvento(label, hora);
                      return (
                        <td key={label} className="py-1 px-1 align-top border-l border-gray-100" style={{ minHeight: 48 }}>
                          {ev && (
                            <div
                              className={`rounded-lg px-2 py-1.5 text-xs font-semibold leading-tight w-full ${
                                ev.tipo === 'evento' ? 'text-white' : 'border border-dashed bg-[#F0EEFF] text-[#6A5CFF]'
                              }`}
                              style={ev.tipo === 'evento' ? { backgroundColor: '#8B7FFF' } : { borderColor: '#8B7FFF' }}
                            >
                              {ev.titulo}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: Sugerencias */}
        <div className="w-80 lg:w-96 flex-shrink-0 mt-[80px]">
          <div className="rounded-t-xl px-5 py-4" style={{ backgroundColor: '#1E3AAE' }}>
            <h2 className="text-white font-bold text-base">Sugerencias de pulse</h2>
          </div>
          <div className="bg-white rounded-b-xl border border-t-0 border-gray-200 shadow-sm divide-y divide-gray-100">
            {sugerencias.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-4">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{s.titulo}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{s.razon}</p>
                </div>
                <button className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer" style={{ backgroundColor: '#6A5CFF' }}>
                  <Plus size={20} strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Navbar />
    </div>
  );
}
