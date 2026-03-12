export default function Badge({ estado }) {
  const styles = {
    Activa: 'bg-green-100 text-green-700',
    Pausada: 'bg-yellow-100 text-yellow-700',
    Vencida: 'bg-red-100 text-red-700',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[estado] || 'bg-gray-100 text-gray-600'}`}>
      {estado}
    </span>
  );
}
