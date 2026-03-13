import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LabelList, ResponsiveContainer,
} from 'recharts';
import { historialStats, historialSemanas, historialDias } from '../data/fakeData';
import Navbar from '../components/Navbar';

const stats = [
  { value: historialStats.alertasCompletadas,     label: 'Alertas completadas' },
  { value: `${historialStats.tasaCumplimiento}%`, label: 'Tasa de cumplimiento' },
  { value: `${historialStats.rachaActual} días`,  label: 'Racha actual' },
];

const waveHeader = {
  background: 'linear-gradient(135deg, #2F5BFF 0%, #6A5CFF 100%)',
  borderBottomLeftRadius: '50% 40px',
  borderBottomRightRadius: '50% 40px',
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-md px-3 py-2 text-xs">
        <p className="font-semibold text-gray-700">{label}</p>
        <p className="text-[#1E3AAE] mt-0.5">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const ToggleButtons = ({ periodo, setPeriodo }) => (
  <div className="flex gap-2 justify-end mb-4">
    {[['dias', 'Últimos 7 días'], ['semanas', 'Últimas 4 semanas']].map(([val, label]) => (
      <button
        key={val}
        onClick={() => setPeriodo(val)}
        className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer"
        style={
          periodo === val
            ? { backgroundColor: '#1E3AAE', color: '#fff', borderColor: '#1E3AAE' }
            : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
        }
      >
        {label}
      </button>
    ))}
  </div>
);

export default function Historial() {
  const [periodo, setPeriodo] = useState('semanas');
  const data  = periodo === 'semanas' ? historialSemanas : historialDias;
  const xKey  = periodo === 'semanas' ? 'semana' : 'dia';

  const chart = (height, barSize) => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} barSize={barSize} margin={{ top: 24, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#E5E7EB" />
        <XAxis dataKey={xKey} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280' }} />
        <YAxis
          domain={[0, 100]} ticks={[0, 25, 50, 75, 100]}
          tickFormatter={(v) => `${v}%`} axisLine={false} tickLine={false}
          tick={{ fontSize: 11, fill: '#6B7280' }} width={36}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6' }} />
        <Bar dataKey="pct" fill="#3B5BFF" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="pct" position="top" formatter={(v) => `${v}%`}
            style={{ fontSize: 11, fontWeight: 600, fill: '#374151' }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="min-h-screen bg-[#F7F9FF] pb-20 md:pb-0 md:pt-[70px]">

      {/* ── MOBILE: wave header ── */}
      <div className="md:hidden flex items-end justify-center px-6 pt-14 pb-12" style={waveHeader}>
        <h1 className="text-3xl font-extrabold text-white">Historial</h1>
      </div>

      {/* ── MOBILE content ── */}
      <div className="md:hidden px-4 pt-6 flex flex-col gap-4 pb-4">
        {/* Stats: 3 cards en fila compacta */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-3 py-4 text-center">
              <p className="text-2xl font-extrabold text-gray-900 leading-none">{value}</p>
              <p className="text-[10px] text-gray-400 mt-2 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-4">
          <ToggleButtons periodo={periodo} setPeriodo={setPeriodo} />
          {chart(220, 40)}
        </div>
      </div>

      {/* ── DESKTOP content ── */}
      <div className="hidden md:flex md:flex-col px-6 py-8 max-w-[1400px] mx-auto gap-6">
        <h1 className="text-3xl font-extrabold" style={{ color: '#1E3AAE' }}>
          Historial de Cumplimiento
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-6">
              <p className="text-5xl font-extrabold text-gray-900 leading-none">{value}</p>
              <p className="text-sm text-gray-400 mt-3">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-6">
          <ToggleButtons periodo={periodo} setPeriodo={setPeriodo} />
          {chart(320, 80)}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
