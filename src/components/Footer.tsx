import { TreePine } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a110e] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 text-white mb-2">
            <div className="bg-[#a2e634] p-1 rounded-sm">
               <TreePine className="w-4 h-4 text-[#0d1611]" />
            </div>
            <span className="font-black text-lg tracking-tighter">EXCELLENT<span className="text-[#a2e634]">TREE</span>LEADS</span>
          </div>
          <p className="text-slate-500 text-xs">
            Exclusive pay-per-call leads for tree service companies.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold tracking-widest uppercase text-slate-400">
          <a href="#proof" className="hover:text-white transition-colors">Proof</a>
          <a href="#recordings" className="hover:text-white transition-colors">Call recordings</a>
          <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          <a href="#packages" className="hover:text-white transition-colors">Packages</a>
          <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
        </div>
        
        <div className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Excellent Tree Leads
        </div>
      </div>
    </footer>
  );
}
