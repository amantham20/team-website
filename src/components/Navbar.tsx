import Link from 'next/link';
import Button from './ui/Button';

const Navbar = () => {
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

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
