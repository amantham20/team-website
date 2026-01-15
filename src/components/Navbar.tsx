'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Robots', href: '/robots' },
    { name: 'Resources', href: '/resources' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center font-black text-xl clip-path-polygon-[0_0,100%_0,100%_70%,70%_100%,0_100%] group-hover:bg-blue-500 transition-colors">
              5509
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">FRC TEAM 5509</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-gray-400 hover:text-blue-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Join Us</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0d1117] border-b border-white/5
        ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition-colors uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5">
            <Button className="w-full" size="lg">Join Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
