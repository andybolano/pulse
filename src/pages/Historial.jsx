import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LabelList, ResponsiveContainer,
} from 'recharts';
import { historialStats, historialSemanas, historialDias } from '../data/fakeData';
import Navbar from '../components/Navbar';

const stats = [
  { value: historialStats.alertasCompletadas,          label: 'Alertas completadas'    },
  { value: `${historialStats.tasaCumplimiento}%`,      label: 'Tasa de cumplimiento'   },
  { value: `${historialStats.rachaActual} días`,       label: 'Racha actual'           },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-md px-3 py-2 text-xs">
        <p className="font-semibold text-gray-700">{label}</p>
        <p className="text-[#3B5BFF] mt-0.5">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Historial() {
  const [periodo, setPeriodo] = useState('semanas'); // 'dias' | 'semanas'
  const data = periodo === 'semanas' ? historialSemanas : historialDias;
  const xKey = periodo === 'semanas' ? 'semana' : 'dia';

  return (
    <div className="min-h-screen bg-[#F7F9FF] pb-24 md:pt-[70px] md:pb-0">
      <div className="px-6 py-8 max-w-[1400px] mx-auto flex flex-col gap-6">

        {/* Title */}
        <h1 className="text-3xl font-extrabold" style={{ color: '#2F5BFF' }}>
          Historial de Cumplimiento
        </h1>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-6">
              <p className="text-5xl font-extrabold text-gray-900 leading-none">{value}</p>
              <p className="text-sm text-gray-400 mt-3">{label}</p>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-6">
          {/* Toggle */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={() => setPeriodo('dias')}
              className="px-5 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer"
              style={
                periodo === 'dias'
                  ? { backgroundColor: '#1E3AAE', color: '#fff', borderColor: '#1E3AAE' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
            >
              Últimos 7 días
            </button>
            <button
              onClick={() => setPeriodo('semanas')}
              className="px-5 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer"
              style={
                periodo === 'semanas'
                  ? { backgroundColor: '#1E3AAE', color: '#fff', borderColor: '#1E3AAE' }
                  : { backgroundColor: '#fff', color: '#374151', borderColor: '#D1D5DB' }
              }
            >
              Últimas 4 semanas
            </button>
          </div>

          {/* Bar chart */}
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data} barSize={80} margin={{ top: 24, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#E5E7EB" />
              <XAxis
                dataKey={xKey}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 13, fill: '#6B7280' }}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(v) => `${v}%`}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                width={40}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6' }} />
              <Bar dataKey="pct" fill="#3B5BFF" radius={[4, 4, 0, 0]}>
                <LabelList
                  dataKey="pct"
                  position="top"
                  formatter={(v) => `${v}%`}
                  style={{ fontSize: 13, fontWeight: 600, fill: '#374151' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
      <Navbar />
    </div>
  );
}
