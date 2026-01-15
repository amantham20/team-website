import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, subtitle }) => {
  return (
    <div className={`bg-gray-900/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] group ${className}`}>
      {title && <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>}
      {subtitle && <p className="text-gray-400 text-sm mb-4">{subtitle}</p>}
      {children}
    </div>
  );
};

export default Card;
