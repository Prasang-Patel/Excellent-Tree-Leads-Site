import { TreePine, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="bg-[#a2e634] p-1.5 rounded-sm">
             <TreePine className="w-5 h-5 text-[#0d1611]" />
          </div>
          <span className="font-black text-xl tracking-tighter">EXCELLENT<span className="text-[#a2e634]">TREE</span>LEADS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#proof" className="hover:text-white transition-colors">Proof</a>
          <a href="#recordings" className="hover:text-white transition-colors">Call recordings</a>
          <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          <a href="#packages" className="hover:text-white transition-colors">Packages</a>
        </div>
        <button className="bg-[#a2e634] hover:bg-[#8cc62c] text-[#0d1611] font-bold px-5 py-2.5 rounded flex items-center gap-2 text-sm transition-colors uppercase tracking-wider">
          <Phone className="w-4 h-4" />
          CLAIM MY AREA
        </button>
      </div>
    </nav>
  );
}
