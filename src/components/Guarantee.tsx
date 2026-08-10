import { Shield, RefreshCcw, Mic, MapPin, Phone } from 'lucide-react';

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-white/20 w-8"></div>
              <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">The Guarantee</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
              EVERY LEAD<br />
              DELIVERED.<br />
              <span className="text-[#a2e634]">BAD CALLS<br />REFUNDED.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              If a call isn't a real homeowner with real tree work in your area, flag it and it comes off your invoice. No arguing over recordings — we both listen to the same one.
            </p>
            
            <button className="bg-[#a2e634] hover:bg-[#8cc62c] text-[#0d1611] font-bold px-8 py-4 rounded flex items-center gap-2 text-sm transition-colors uppercase tracking-widest">
              <Phone className="w-4 h-4" />
              Claim My Service Area
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#132017] border border-white/10 rounded-xl p-8 hover:border-[#a2e634]/50 transition-colors">
              <Shield className="w-6 h-6 text-[#a2e634] mb-6" />
              <h3 className="text-white font-bold tracking-tight uppercase mb-3">Full Delivery</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Your package volume gets delivered, or the balance rolls to next month.</p>
            </div>
            
            <div className="bg-[#132017] border border-white/10 rounded-xl p-8 hover:border-[#a2e634]/50 transition-colors">
              <RefreshCcw className="w-6 h-6 text-[#a2e634] mb-6" />
              <h3 className="text-white font-bold tracking-tight uppercase mb-3">Refund Policy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Wrong numbers, out-of-area, spam, or non-tree calls are credited back.</p>
            </div>
            
            <div className="bg-[#132017] border border-white/10 rounded-xl p-8 hover:border-[#a2e634]/50 transition-colors">
              <Mic className="w-6 h-6 text-[#a2e634] mb-6" />
              <h3 className="text-white font-bold tracking-tight uppercase mb-3">Recorded Proof</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every call is logged with number, duration, and audio you can review.</p>
            </div>
            
            <div className="bg-[#132017] border border-white/10 rounded-xl p-8 hover:border-[#a2e634]/50 transition-colors">
              <MapPin className="w-6 h-6 text-[#a2e634] mb-6" />
              <h3 className="text-white font-bold tracking-tight uppercase mb-3">Area Exclusivity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Calls from your ZIPs go to you only — never resold to a competitor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
