import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const calendars = [
  {
    id: 'google',
    name: 'Google Calendar',
    description: 'Sincroniza eventos, recordatorios y alarmas de google calendar',
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
        style={{ background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 75%, #EA4335 100%)' }}>
        <span className="text-white font-extrabold text-base">31</span>
      </div>
    ),
    active: true,
  },
  {
    id: 'apple',
    name: 'Apple Calendar',
    description: 'Compatible con Mac, iPhone y iPad',
    icon: (
      <div className="w-10 h-10 rounded-xl flex flex-col overflow-hidden border border-gray-200">
        <div className="h-3 flex items-center justify-center" style={{ backgroundColor: '#EA4335' }}>
          <span className="text-white text-[8px] font-bold">••••••</span>
        </div>
        <div className="flex-1 flex items-center justify-center bg-white">
          <span className="font-bold text-gray-800 text-base">17</span>
        </div>
      </div>
    ),
    active: false,
  },
  {
    id: 'outlook',
    name: 'Microsoft outlook',
    description: 'Ideal para office 365 y entornos corporativos',
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: '#0078D4' }}>
        <span className="text-white font-bold text-lg">O</span>
      </div>
    ),
    active: false,
  },
];

export default function ConectarCalendario() {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = (id) => {
    setConnected(id);
    setLoading(true);
    setTimeout(() => {
      navigate('/inicio');
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#F7F9FF' }}>
        <div className="w-14 h-14 border-4 border-[#E6EFFF] border-t-[#2F5BFF] rounded-full animate-spin mx-auto mb-5" />
        <p className="text-lg font-semibold text-gray-700">Conectando calendario...</p>
        <p className="text-sm text-gray-400 mt-1">Esto tomará solo un momento</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 pt-14 pb-10" style={{ backgroundColor: '#F7F9FF' }}>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex-1 pr-4">
          <h1 className="text-2xl font-bold" style={{ color: '#1E3AAE' }}>Conecta tu calendario</h1>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            Pulse necesita leer tus eventos para generar alarmas contextuales inteligentes
          </p>
        </div>
        <span className="flex-shrink-0 px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: '#E06B6B' }}>
          No Conectado
        </span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {calendars.map((cal, i) => (
          <div
            key={cal.id}
            className={`flex items-center gap-4 px-5 py-5 ${i < calendars.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            {/* Icon */}
            <div className="flex-shrink-0">{cal.icon}</div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-800 text-sm">{cal.name}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{cal.description}</p>
            </div>

            {/* Button */}
            <button
              onClick={() => handleConnect(cal.id)}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all active:scale-95 cursor-pointer"
              style={{ backgroundColor: cal.active ? '#6A5CFF' : '#B0B8E8' }}
            >
              Conectar
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
