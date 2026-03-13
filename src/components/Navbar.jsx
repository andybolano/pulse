import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Bell, Clock } from 'lucide-react';

const tabs = [
  { path: '/inicio', label: 'Inicio', icon: Home },
  { path: '/planeacion', label: 'Planeación', icon: Calendar },
  { path: '/alarmas', label: 'Alarmas', icon: Bell },
  { path: '/historial', label: 'Historial', icon: Clock },
];

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      {/* ── DESKTOP: top header (md y mayor) ── */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center h-[70px] px-8"
        style={{ backgroundColor: '#1E3AAE' }}>
        {/* Logo */}
        <span className="text-white font-extrabold text-2xl tracking-wide mr-auto">PULSE</span>

        {/* Tabs */}
        <nav className="flex items-stretch h-full">
          {tabs.map(({ path, label, icon: Icon }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                className="flex flex-col items-center justify-center gap-0.5 px-8 h-full transition-colors"
                style={{ backgroundColor: active ? '#2F5BFF' : 'transparent' }}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 1.8} className="text-white" />
                <span className="text-white text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      {/* ── MOBILE: bottom nav (menor que md) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: '#1E3AAE' }}>
        <div className="flex items-stretch h-16">
          {tabs.map(({ path, label, icon: Icon }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors"
                style={{ backgroundColor: active ? '#2F5BFF' : 'transparent' }}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 1.8} className="text-white" />
                <span className="text-white text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
