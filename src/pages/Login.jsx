import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/conectar-calendario');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F9FF' }}>

      {/* ── MOBILE header: wave azul ── */}
      <div
        className="md:hidden flex flex-col items-center justify-center pt-14 pb-16 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #2F5BFF 0%, #6A5CFF 100%)',
          borderBottomLeftRadius: '50% 40px',
          borderBottomRightRadius: '50% 40px',
        }}
      >
        <h1 className="text-5xl font-extrabold text-white tracking-wide">PULSE</h1>
        <p className="text-white font-semibold text-lg mt-2">Alarmas para tu bienestar</p>
      </div>

      {/* ── DESKTOP header: título sobre el card ── */}
      <div className="hidden md:flex flex-col items-center justify-center pt-16 pb-2">
        <h1 className="text-5xl font-extrabold" style={{ color: '#2F5BFF' }}>PULSE</h1>
        <p className="text-xl font-bold text-gray-900 mt-1">Alarmas para tu bienestar</p>
      </div>

      {/* Form — mobile: sin card, desktop: con card */}
      <div className="flex flex-col items-center flex-1 md:justify-center px-6 pt-8 md:pt-0 pb-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md flex flex-col gap-5 md:bg-white md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:px-8 md:py-8"
        >
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold" style={{ color: '#1E3AAE' }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="usuario@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] transition-all"
              style={{ borderColor: '#CBD5FF', color: '#1E3AAE' }}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold" style={{ color: '#1E3AAE' }}>
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3AAE] transition-all"
              style={{ borderColor: '#CBD5FF', color: '#1E3AAE' }}
            />
          </div>

          {/* Forgot password */}
          <div className="text-center -mt-2">
            <a href="#" className="text-sm font-medium" style={{ color: '#1E3AAE' }}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Ingresar */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full text-white font-bold text-base transition-all active:scale-95 cursor-pointer"
            style={{ backgroundColor: '#6A5CFF' }}
          >
            Ingresar
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Continuar con Google */}
          <button
            type="button"
            className="w-full py-3.5 rounded-full border font-semibold text-base bg-white transition-all hover:bg-gray-50 active:scale-95 cursor-pointer"
            style={{ borderColor: '#E5E7EB', color: '#9CA3AF' }}
          >
            Continuar con Google
          </button>
        </form>
      </div>

    </div>
  );
}
