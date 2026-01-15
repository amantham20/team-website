import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    secondary: 'bg-gray-700/50 text-gray-400 border-gray-600/30',
    outline: 'bg-transparent text-gray-300 border-white/20',
    success: 'bg-green-600/20 text-green-400 border-green-600/30',
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
