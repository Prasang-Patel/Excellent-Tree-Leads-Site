import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const features = [
    { name: "Calls are exclusive to you", us: true, angi: false, fb: false, ref: true },
    { name: "Homeowner calls you directly", us: true, angi: false, fb: false, ref: true },
    { name: "Filtered to your service area", us: true, angi: true, fb: false, ref: true },
    { name: "Refund on unqualified calls", us: true, angi: false, fb: false, ref: false },
    { name: "No long-term contract", us: true, angi: false, fb: true, ref: true },
    { name: "Predictable weekly volume", us: true, angi: true, fb: false, ref: false },
    { name: "You set the daily call cap", us: true, angi: false, fb: false, ref: false },
  ];

  return (
    <section id="compare" className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/20 w-8"></div>
          <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Head To Head</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight max-w-2xl leading-tight">
          US VS. EVERYTHING ELSE<br />YOU'VE TRIED
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 border-b border-white/10 text-slate-400 text-[10px] font-bold tracking-widest uppercase w-1/3">What Matters</th>
                <th className="p-4 border-b border-white/10 text-[#a2e634] text-[10px] font-bold tracking-widest uppercase bg-[#132017]">Excellent Tree Leads</th>
                <th className="p-4 border-b border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">Angi / HomeAdvisor</th>
                <th className="p-4 border-b border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">Facebook Ads</th>
                <th className="p-4 border-b border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">Referrals</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="p-4 border-b border-white/5 text-slate-200 text-sm font-medium">{feature.name}</td>
                  
                  {/* Us */}
                  <td className="p-4 border-b border-white/5 bg-[#132017]">
                    {feature.us ? <Check className="w-5 h-5 text-[#a2e634]" /> : <X className="w-5 h-5 text-slate-600" />}
                  </td>
                  
                  {/* Angi */}
                  <td className="p-4 border-b border-white/5">
                    {feature.angi ? <Check className="w-5 h-5 text-slate-500" /> : <X className="w-5 h-5 text-[#ff4b4b]" />}
                  </td>
                  
                  {/* FB */}
                  <td className="p-4 border-b border-white/5">
                    {feature.fb ? <Check className="w-5 h-5 text-slate-500" /> : <X className="w-5 h-5 text-[#ff4b4b]" />}
                  </td>
                  
                  {/* Referrals */}
                  <td className="p-4 border-b border-white/5">
                    {feature.ref ? <Check className="w-5 h-5 text-slate-500" /> : <X className="w-5 h-5 text-[#ff4b4b]" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
