import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="relative bg-[#0d1611] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588629085695-976db57bd24a?auto=format&fit=crop&q=80&w=2000" 
          alt="Arborist working in tree" 
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1611] via-[#0d1611]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-[#0d1611]/50 to-transparent"></div>
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full mt-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#a2e634]/30 rounded-full px-3 py-1.5 mb-6 bg-[#0d1611]/50 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#a2e634]" />
            <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Pay Per Call • Tree Services Only</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
            EXCLUSIVE<br />
            TREE WORK<br />
            <span className="text-[#a2e634] inline-block bg-[#a2e634]/10 px-2 -mx-2">PHONE CALLS.</span><br />
            NOT SHARED<br />
            LEADS.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            High-intent homeowners inside your service area call your phone directly. You only pay for qualified calls — and unqualified ones get refunded.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#packages" className="inline-flex items-center justify-center bg-[#a2e634] hover:bg-[#8cc62c] text-[#0d1611] px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors">
              SEE LEAD PACKAGES
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#recordings" className="inline-flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors">
              <PlayCircle className="mr-2 w-5 h-5" />
              HEAR REAL CALLS
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-6">TRUSTED BY TOP TREE CARE COMPANIES NATIONWIDE</p>
            <div className="flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span className="text-white font-bold text-lg tracking-tighter">OAK & PINE</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 22 22 22 12 2"/></svg>
                <span className="text-white font-bold text-lg tracking-widest uppercase">Apex Arbor</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22v-7l-2-2"/></svg>
                <span className="text-white font-black text-xl italic tracking-tighter">TimberWorks</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></svg>
                <span className="text-white font-semibold text-lg tracking-tight">ECO-TREE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
