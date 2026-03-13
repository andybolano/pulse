import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Bell, Clock, Plus } from 'lucide-react';
import { alarmas, categorias } from '../data/fakeData';
import Navbar from '../components/Navbar';

const estadoStyle = {
  Activa:  'text-green-500 font-semibold',
  Pausada: 'text-yellow-500 font-semibold',
  Vencida: 'text-red-500 font-semibold',
};

const columns = ['Nombre', 'Categoría', 'Frecuencia', 'Próxima Vez', 'Estado'];

export default function Alarmas() {
  const [query, setQuery] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');

  const filtradas = alarmas.filter((a) => {
    const matchQuery = a.nombre.toLowerCase().includes(query.toLowerCase());
    const matchCat = !filtroCategoria || a.categoria === filtroCategoria;
    return matchQuery && matchCat;
  });

  return (
    <div className="min-h-screen bg-[#F7F9FF] pb-20 md:pb-0 md:pt-[70px]">

      {/* ── MOBILE: wave header ── */}
      <div
        className="md:hidden flex items-end justify-center px-6 pt-14 pb-12"
        style={{
          background: 'linear-gradient(135deg, #2F5BFF 0%, #6A5CFF 100%)',
          borderBottomLeftRadius: '50% 40px',
          borderBottomRightRadius: '50% 40px',
        }}
      >
        <h1 className="text-3xl font-extrabold text-white">Mis Alarmas</h1>
      </div>

      {/* ── MOBILE: filtros + lista ── */}
      <div className="md:hidden px-4 pt-5 flex flex-col gap-3">
        {/* Search + Crear */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar alarma..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] transition-all"
            style={{ color: '#1E3AAE' }}
          />
          <Link
            to="/alarmas/nueva"
            className="flex items-center justify-center w-10 h-10 rounded-xl text-white flex-shrink-0"
            style={{ backgroundColor: '#6A5CFF' }}
          >
            <Plus size={20} />
          </Link>
        </div>

        {/* Cards */}
        {filtradas.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-10">No se encontraron alarmas</p>
        ) : (
          filtradas.map((a) => (
            <div key={a.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E6EFFF' }}>
                <Bell size={18} style={{ color: '#1E3AAE' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate" style={{ color: '#1E3AAE' }}>{a.nombre}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Clock size={11} className="text-gray-400" />
                  <span className="text-xs text-gray-400">{a.proximaVez}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{a.categoria}</span>
                </div>
              </div>
              <span className={`text-sm flex-shrink-0 ${estadoStyle[a.estado]}`}>{a.estado}</span>
            </div>
          ))
        )}
      </div>

      {/* ── DESKTOP: layout tabla ── */}
      <div className="hidden md:block px-6 py-8 max-w-[1400px] mx-auto">

        <h1 className="text-3xl font-extrabold mb-6" style={{ color: '#1E3AAE' }}>
          Mis Alarmas
        </h1>

        {/* Filters row */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Buscar alarma..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-full border border-gray-300 px-5 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] focus:border-transparent transition-all w-56"
            style={{ color: '#1E3AAE' }}
          />
          <div className="relative">
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="appearance-none rounded-full border border-gray-300 pl-5 pr-10 py-2.5 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] focus:border-transparent transition-all cursor-pointer bg-white w-48"
            >
              <option value="">Categoría</option>
              {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="flex-1" />
          <Link
            to="/alarmas/nueva"
            className="px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all active:scale-95"
            style={{ backgroundColor: '#6A5CFF' }}
          >
            Crear Alarma
          </Link>
        </div>

        {/* Table header */}
        <div
          className="grid rounded-t-xl px-6 py-3"
          style={{ backgroundColor: '#1E3AAE', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
        >
          {columns.map((col) => (
            <span key={col} className="text-white font-bold text-sm text-center first:text-left">
              {col}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2 mt-2">
          {filtradas.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm">No se encontraron alarmas</div>
          ) : (
            filtradas.map((a) => (
              <div
                key={a.id}
                className="grid bg-white rounded-xl border border-gray-200 px-6 py-4 items-center"
                style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
              >
                <span className="text-sm font-medium" style={{ color: '#1E3AAE' }}>{a.nombre}</span>
                <span className="text-sm text-center" style={{ color: '#1E3AAE' }}>{a.categoria}</span>
                <span className="text-sm text-center" style={{ color: '#1E3AAE' }}>{a.frecuencia}</span>
                <span className="text-sm text-center" style={{ color: '#1E3AAE' }}>{a.proximaVez}</span>
                <span className={`text-sm text-center ${estadoStyle[a.estado]}`}>{a.estado}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
