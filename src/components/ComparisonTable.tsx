import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const ourFeatures = [
    "100% Exclusive Phone Calls",
    "Photos of job, Address",
    "Higher Booking Rates",
    "Homeowners Call You Directly",
    "Realtime Connection",
    "Higher Close Rates",
    "Better Margins"
  ];

  const theirFeatures = [
    "Shared Leads",
    "Multiple Contractors",
    "You Chase The Leads",
    "Delayed Contact",
    "Lower Close Rates",
    "Reduced Margins"
  ];

  return (
    <section id="compare" className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight text-center uppercase">
          WHY OUR PHONE CALL SYSTEM OUTPERFORMS LEAD SITES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {/* Our Card */}
          <div className="bg-[#132017] border border-[#a2e634]/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(162,230,52,0.05)]">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[#a2e634] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#0d1611]" strokeWidth={3} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">EXCELLENT TREE LEADS</h3>
            </div>
            
            <ul className="space-y-6">
              {ourFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#a2e634]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#a2e634]" strokeWidth={3} />
                  </div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Their Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                <span className="text-slate-500 font-black text-xl">!</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight">ANGI / HOMEADVISOR<br/><span className="text-sm text-slate-500 block mt-1">& OTHER LEAD VENDORS</span></h3>
            </div>
            
            <ul className="space-y-6">
              {theirFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#fee2e2] flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-[#ef4444]" strokeWidth={3} />
                  </div>
                  <span className="text-slate-600 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
