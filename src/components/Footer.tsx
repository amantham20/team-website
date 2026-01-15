import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a0c10] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center font-black text-sm clip-path-polygon-[0_0,100%_0,100%_70%,70%_100%,0_100%]">
              5509
            </div>
            <span className="font-bold text-lg tracking-tighter text-white uppercase">FRC TEAM 5509</span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
            <li><Link href="/robots" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Our Robots</Link></li>
            <li><Link href="/resources" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Resources</Link></li>
            <li><Link href="/sponsors" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Sponsors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Instagram</a></li>
            <li><a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">YouTube</a></li>
            <li><a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">GitHub</a></li>
            <li><a href="mailto:info@team5509.com" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} FRC Team 5509. All Rights Reserved.
        </p>
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          Measure Once Cut Twice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
