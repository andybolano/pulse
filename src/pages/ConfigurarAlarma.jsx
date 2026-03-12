import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categorias, frecuencias } from '../data/fakeData';
import Navbar from '../components/Navbar';

const canales = [
  'Notificación push + Sonido',
  'Notificación push',
  'Solo sonido',
  'Solo vibración',
  'Silenciosa',
];

const StyledSelect = ({ value, onChange, options, placeholder }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className="w-full appearance-none rounded-xl border border-gray-200 pl-4 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] focus:border-transparent transition-all bg-white cursor-pointer" style={{ color: '#1E3AAE' }}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

const FieldLabel = ({ children }) => (
  <label className="block text-sm font-bold mb-1.5" style={{ color: '#1E3AAE' }}>{children}</label>
);

export default function ConfigurarAlarma() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '',
    categoria: 'Salud',
    fechaHora: '',
    frecuencia: 'Diaria',
    canal: 'Notificación push + Sonido',
    evento: '',
  });

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  // Vista previa values (usa defaults si el form está vacío)
  const previewNombre   = form.nombre    || 'Hidratación Matutina';
  const previewHora     = form.fechaHora || '12:00pm';
  const previewFrecuencia = form.frecuencia || 'Diaria';
  const previewCategoria  = form.categoria  || 'Salud';
  const previewEvento   = form.evento    || 'Bloque de estudio';
  const previewCanal    = form.canal     || 'Push + sonido';

  return (
    <div className="min-h-screen bg-[#F7F9FF] pb-24 md:pt-[70px] md:pb-0">
      <div className="px-6 py-8 max-w-[1400px] mx-auto">

        {/* Two-column layout */}
        <div className="flex gap-6 items-start">

          {/* ── LEFT: Configurar alarma ── */}
          <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            {/* Panel header */}
            <div className="px-6 py-4" style={{ backgroundColor: '#1E3AAE' }}>
              <h2 className="text-white font-bold text-lg">Configurar alarma</h2>
            </div>

            {/* Form body */}
            <div className="bg-white px-6 py-6 flex flex-col gap-5">

              <div>
                <FieldLabel>Nombre de la alarma</FieldLabel>
                <input
                  type="text"
                  placeholder="Ej: Hidratación matutina"
                  value={form.nombre}
                  onChange={(e) => set('nombre', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] focus:border-transparent transition-all" style={{ color: '#1E3AAE' }}
                />
              </div>

              <div>
                <FieldLabel>Tipo / Categoría</FieldLabel>
                <StyledSelect
                  value={form.categoria}
                  onChange={(e) => set('categoria', e.target.value)}
                  options={categorias}
                />
              </div>

              <div>
                <FieldLabel>Fecha y Hora</FieldLabel>
                <input
                  type="text"
                  placeholder="Mié 4 Marzo 2026 - 12:00pm"
                  value={form.fechaHora}
                  onChange={(e) => set('fechaHora', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] focus:border-transparent transition-all" style={{ color: '#1E3AAE' }}
                />
              </div>

              <div>
                <FieldLabel>Frecuencia / Repetición</FieldLabel>
                <StyledSelect
                  value={form.frecuencia}
                  onChange={(e) => set('frecuencia', e.target.value)}
                  options={frecuencias}
                />
              </div>

              <div>
                <FieldLabel>Canal de notificación</FieldLabel>
                <StyledSelect
                  value={form.canal}
                  onChange={(e) => set('canal', e.target.value)}
                  options={canales}
                />
              </div>

              <div>
                <FieldLabel>Vincular evento al calendario</FieldLabel>
                <input
                  type="text"
                  placeholder="Bloque estudio - Mié 10:30am"
                  value={form.evento}
                  onChange={(e) => set('evento', e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] focus:border-transparent transition-all" style={{ color: '#1E3AAE' }}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => navigate('/alarmas')}
                  className="flex-1 py-3 rounded-xl border-2 text-sm font-bold transition-all hover:bg-gray-50 active:scale-95 cursor-pointer"
                  style={{ borderColor: '#E5E7EB', color: '#2F5BFF' }}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => navigate('/alarmas')}
                  className="flex-1 py-3 rounded-xl text-white text-sm font-bold transition-all active:scale-95 cursor-pointer"
                  style={{ backgroundColor: '#6A5CFF' }}
                >
                  Guardar alarma
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Vista previa ── */}
          <div className="w-80 lg:w-96 flex-shrink-0">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              {/* Panel header */}
              <div className="px-6 py-4" style={{ backgroundColor: '#1E3AAE' }}>
                <h2 className="text-white font-bold text-lg">Vista previa</h2>
              </div>

              {/* Preview card */}
              <div className="bg-white px-5 py-5">
                <p className="font-bold text-lg" style={{ color: '#1E3AAE' }}>{previewNombre}</p>
                <p className="text-sm text-gray-400 mt-0.5">{previewHora} | {previewFrecuencia} | {previewCategoria}</p>

                <hr className="my-3 border-gray-200" />

                <p className="text-sm text-gray-400">Vinculada a: {previewEvento}</p>
                <p className="text-sm text-gray-400 mt-1">Canal: {previewCanal}</p>
                <p className="text-base font-bold text-green-500 mt-3">Activa</p>
              </div>
            </div>

            {/* Info text */}
            <p className="text-sm text-gray-500 mt-4 leading-relaxed px-1">
              Pulse ajusta la hora de esta alarma automáticamente si el evento vinculado
              cambia de horario en tu calendario sincronizado
            </p>

            {/* Regla contextual */}
            <div className="mt-4 px-1">
              <p className="font-bold text-gray-800 text-sm mb-2">Regla contextual</p>
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                <p className="text-sm text-gray-500">Activar 30 minutos antes del evento vinculado</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Navbar />
    </div>
  );
}
