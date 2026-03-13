import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-lg shadow-sm"
    style={{ background: 'linear-gradient(135deg, #4285F4 0%, #34A853 40%, #FBBC05 70%, #EA4335 100%)' }}>
    <span className="text-white font-extrabold">31</span>
  </div>
);

const AppleIcon = () => (
  <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 flex flex-col shadow-sm">
    <div className="flex items-center justify-center py-0.5" style={{ backgroundColor: '#EA4335' }}>
      <span className="text-white text-[9px] font-bold tracking-widest">JUL</span>
    </div>
    <div className="flex-1 flex items-center justify-center bg-white">
      <span className="font-bold text-gray-800 text-xl leading-none">17</span>
    </div>
  </div>
);

const OutlookIcon = () => (
  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
    style={{ backgroundColor: '#0078D4' }}>
    <div className="flex flex-col items-center">
      <span className="text-white font-extrabold text-base leading-none">O</span>
      <div className="flex gap-0.5 mt-0.5">
        <div className="w-1 h-0.5 bg-white/70 rounded" />
        <div className="w-2 h-0.5 bg-white/70 rounded" />
      </div>
    </div>
  </div>
);

const calendars = [
  { id: 'google', name: 'Google Calendar',   description: 'Sincroniza eventos, recordatorios y alarmas de google calendar', icon: <GoogleIcon />, active: true  },
  { id: 'apple',  name: 'Apple Calendar',    description: 'Compatible con Mac, iPhone y iPad',                               icon: <AppleIcon />,  active: false },
  { id: 'outlook',name: 'Microsoft Outlook', description: 'Ideal Para Office 365 y entornos corporativos',                   icon: <OutlookIcon />,active: false },
];

export default function ConectarCalendario() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => navigate('/inicio'), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#F7F9FF' }}>
        <div className="w-14 h-14 border-4 border-[#E6EFFF] border-t-[#1E3AAE] rounded-full animate-spin mx-auto mb-5" />
        <p className="text-lg font-semibold text-gray-700">Conectando calendario...</p>
        <p className="text-sm text-gray-400 mt-1">Esto tomará solo un momento</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F9FF' }}>

      {/* ── MOBILE: wave header ── */}
      <div
        className="md:hidden flex items-end justify-center px-6 pt-14 pb-12"
        style={{
          background: 'linear-gradient(135deg, #2F5BFF 0%, #6A5CFF 100%)',
          borderBottomLeftRadius: '50% 40px',
          borderBottomRightRadius: '50% 40px',
        }}
      >
        <h1 className="text-3xl font-extrabold text-white">Conectar Calendario</h1>
      </div>

      {/* ── DESKTOP: header con badge ── */}
      <div className="hidden md:flex items-start justify-between px-6 pt-14 pb-0 max-w-2xl mx-auto w-full">
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

      {/* Cards */}
      <div className="flex flex-col gap-4 px-5 py-8 max-w-2xl mx-auto w-full">
        {calendars.map((cal) => (
          <div key={cal.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* ── MOBILE layout: vertical ── */}
            <div className="md:hidden px-5 pt-5 pb-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {cal.icon}
                <p className="font-extrabold text-gray-800 text-lg">{cal.name}</p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{cal.description}</p>
              <button
                onClick={handleConnect}
                className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all active:scale-95 cursor-pointer mt-1"
                style={{ backgroundColor: cal.active ? '#6A5CFF' : '#B0B8E8' }}
              >
                Conectar
              </button>
            </div>

            {/* ── DESKTOP layout: horizontal ── */}
            <div className="hidden md:flex items-center gap-4 px-5 py-5">
              <div className="flex-shrink-0">{cal.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">{cal.name}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{cal.description}</p>
              </div>
              <button
                onClick={handleConnect}
                className="flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all active:scale-95 cursor-pointer"
                style={{ backgroundColor: cal.active ? '#6A5CFF' : '#B0B8E8' }}
              >
                Conectar
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
