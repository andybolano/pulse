export default function Button({ children, variant = 'primary', size = 'md', onClick, type = 'button', disabled = false, className = '' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none cursor-pointer';

  const variants = {
    primary: 'bg-[#2F5BFF] text-white hover:bg-[#1E3AAE] active:scale-95',
    secondary: 'bg-[#E6EFFF] text-[#2F5BFF] hover:bg-[#d0e0ff] active:scale-95',
    ghost: 'bg-transparent text-[#2F5BFF] hover:bg-[#E6EFFF] active:scale-95',
    danger: 'bg-[#EF4444] text-white hover:bg-red-600 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    full: 'px-5 py-3 text-base w-full',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
