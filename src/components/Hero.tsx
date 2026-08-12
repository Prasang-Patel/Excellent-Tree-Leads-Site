import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import heroBg from '../assets/images/arborist_crane_chainsaw_bg_1786391442323.jpg';


export default function Hero() {
  return (
    <section className="relative bg-[#0d1611] pt-36 sm:pt-32 pb-6 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="Arborist working in tree" 
          className="w-full h-[60vh] sm:h-full object-cover object-[top_right] sm:object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1611] via-[#0d1611]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-[#0d1611]/50 to-transparent"></div>
        {/* Halftone pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full mt-2 sm:mt-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#a2e634]/30 rounded-full px-3 py-1.5 mb-2 sm:mb-6 bg-[#0d1611]/50 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#a2e634]" />
            <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Pay Per Call • Tree Services Only</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tight mb-2 sm:mb-8">
            EXCLUSIVE<br />
            TREE WORK<br />
            <span className="text-[#a2e634]">PHONE CALLS.</span><br />
            NOT SHARED<br />
            LEADS.
          </h1>
          
          <p className="text-base sm:text-xl text-slate-300 mb-3 sm:mb-10 max-w-xl leading-relaxed">
            High-intent homeowners inside your service area call your phone directly. You only pay for qualified calls — and unqualified ones get refunded.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-16">
            <a href="#packages" className="inline-flex items-center justify-center bg-[#a2e634] hover:bg-[#8cc62c] text-[#0d1611] px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm rounded font-bold tracking-widest uppercase transition-colors">
              SEE LEAD PACKAGES
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#recordings" className="inline-flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white px-4 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm rounded font-bold tracking-widest uppercase transition-colors">
              <PlayCircle className="mr-2 w-5 h-5" />
              HEAR REAL CALLS
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-6">TRUSTED BY TOP TREE CARE COMPANIES NATIONWIDE</p>
            <div className="inline-grid grid-cols-3 gap-4 sm:gap-12 w-full max-w-3xl justify-items-center">
              <div className="flex items-center justify-center">
                <img src="/logos/angels.jpg" alt="Angels Tree Service" className="h-20 sm:h-32 w-auto object-contain hover:scale-105 transition-transform rounded-lg" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/logos/dm.jpg" alt="D&M Tree Service" className="h-20 sm:h-32 w-auto object-contain hover:scale-105 transition-transform rounded-lg" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/logos/hopkins.jpg" alt="Hopkins Arbor Care" className="h-20 sm:h-32 w-auto object-contain hover:scale-105 transition-transform rounded-lg" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/logos/see-through.png" alt="Tree Service" className="h-20 sm:h-32 w-auto object-contain hover:scale-105 transition-transform rounded-lg" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/logos/we-care.jpg" alt="We Care Tree Care" className="h-20 sm:h-32 w-auto object-contain hover:scale-105 transition-transform rounded-lg" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/logos/william.jpg" alt="William Tree Service" className="h-20 sm:h-32 w-auto object-contain hover:scale-105 transition-transform rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
