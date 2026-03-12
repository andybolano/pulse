import { Bell, Flame, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { alarmas, historialStats } from '../data/fakeData';
import Navbar from '../components/Navbar';

const estadoStyle = {
  Activa:  'text-green-500 font-semibold text-sm',
  Pausada: 'text-yellow-500 font-semibold text-sm',
  Vencida: 'text-red-500 font-semibold text-sm',
};

const hoyAlarmas = alarmas.filter(a => a.proximaVez.startsWith('Hoy'));

export default function Inicio() {
  return (
    <div className="min-h-screen bg-[#F7F9FF] pb-24 md:pt-[70px] md:pb-0">

      {/* Hero gradient */}
      <div className="bg-gradient-to-r from-[#2F5BFF] to-[#6A5CFF] px-6 md:px-10 pt-10 pb-8 rounded-b-3xl">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-blue-200 text-sm">Hola, María 👋</p>
              <h1 className="text-white text-3xl font-bold mt-0.5">Tu día con PULSE</h1>
              <p className="text-blue-200 text-sm mt-1">Miércoles, 11 de marzo 2026</p>
            </div>
            <div className="w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center bg-white/10">
              <span className="text-white font-bold text-sm">M</span>
            </div>
          </div>

          {/* Racha */}
          <div className="flex items-center gap-3 mt-5 bg-white/15 rounded-2xl px-5 py-3">
            <Flame size={22} className="text-orange-300 flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">{historialStats.rachaActual} días de racha</p>
              <p className="text-blue-200 text-xs mt-0.5">¡Sigue así! Tu mejor racha es 12 días</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto mt-6 flex flex-col gap-6">

        {/* Stats — 2 cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span className="text-sm text-gray-500 font-medium">Completadas</span>
            </div>
            <p className="text-4xl font-extrabold text-gray-900">{historialStats.alertasCompletadas}</p>
            <p className="text-sm text-gray-400 mt-1">este mes</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-5">
            <div className="flex items-center gap-2 mb-2">
              <Bell size={18} style={{ color: '#1E3AAE' }} />
              <span className="text-sm text-gray-500 font-medium">Cumplimiento</span>
            </div>
            <p className="text-4xl font-extrabold" style={{ color: '#1E3AAE' }}>
              {historialStats.tasaCumplimiento}%
            </p>
            <p className="text-sm text-gray-400 mt-1">tasa actual</p>
          </div>
        </div>

        {/* Alarmas de hoy */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Alarmas de hoy</h2>
            <Link to="/alarmas" className="text-sm font-semibold hover:underline" style={{ color: '#1E3AAE' }}>
              Ver todas
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {hoyAlarmas.map((alarma) => (
              <div
                key={alarma.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 flex items-center gap-4"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#E6EFFF' }}>
                  <Bell size={20} style={{ color: '#1E3AAE' }} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm">{alarma.nombre}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-xs text-gray-400">{alarma.proximaVez}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{alarma.categoria}</span>
                  </div>
                </div>

                {/* Estado */}
                <span className={estadoStyle[alarma.estado]}>{alarma.estado}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Navbar />
    </div>
  );
}
