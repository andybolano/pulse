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
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#F7F9FF' }}>
      {/* Header fuera del card */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold" style={{ color: '#2F5BFF' }}>PULSE</h1>
        <p className="text-xl font-bold text-gray-900 mt-1">Alarmas para tu bienestar</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8">
        <form onSubmit={handleLogin} className="flex flex-col gap-5">

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
              className="w-full rounded-xl border px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
              style={{ borderColor: '#CBD5FF', focusRingColor: '#2F5BFF' }}
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
              className="w-full rounded-xl border px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
              style={{ borderColor: '#CBD5FF' }}
            />
          </div>

          {/* Forgot password - centrado */}
          <div className="text-center -mt-2">
            <a href="#" className="text-sm" style={{ color: '#2F5BFF' }}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Ingresar button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full text-white font-bold text-base transition-all active:scale-95 cursor-pointer"
            style={{ backgroundColor: '#6A5CFF' }}
          >
            Ingresar
          </button>

          {/* Divider con círculo */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Continuar con Google */}
          <button
            type="button"
            className="w-full py-3.5 rounded-full border text-gray-400 font-semibold text-base bg-white transition-all hover:bg-gray-50 active:scale-95 cursor-pointer"
            style={{ borderColor: '#E5E7EB' }}
          >
            Continuar con Google
          </button>

        </form>
      </div>
    </div>
  );
}
