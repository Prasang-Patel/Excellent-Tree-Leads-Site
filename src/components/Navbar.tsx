import { TreePine, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 w-full">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="bg-[#a2e634] p-1.5 rounded-sm">
             <TreePine className="w-5 h-5 text-[#0d1611]" />
          </div>
          <span className="font-black text-xl tracking-tighter">EXCELLENT<span className="text-[#a2e634]">TREE</span>LEADS</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#proof" className="hover:text-white transition-colors">Proof</a>
          <a href="#recordings" className="hover:text-white transition-colors">Call recordings</a>
          <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          <a href="#packages" className="hover:text-white transition-colors">Packages</a>
        </div>
        
        {/* Mobile & Desktop CTA Button */}
        <div className="w-full md:w-auto flex justify-center">
          <a href="sms:+17064310667?body=I'm%20interested%20in%20exclusive%20calls" className="w-full md:w-auto max-w-[300px] md:max-w-none flex justify-center bg-[#a2e634] hover:bg-[#8cc62c] text-[#0d1611] font-bold px-4 py-2 rounded items-center gap-2 text-sm transition-colors uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            CLAIM MY AREA
          </a>
        </div>
        
      </div>
    </nav>
  );
}
