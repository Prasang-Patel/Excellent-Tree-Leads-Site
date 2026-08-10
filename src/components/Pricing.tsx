import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "STARTER ROUTE",
      volume: "20 CALLS / MO",
      price: "$65",
      popular: false,
      features: [
        "One service area",
        "Removal + trimming calls",
        "Daily cap you control",
        "Refunds on unqualified calls"
      ]
    },
    {
      name: "CREW BUILDER",
      volume: "50 CALLS / MO",
      price: "$58",
      popular: true,
      features: [
        "Up to three ZIP clusters",
        "Priority storm-season routing",
        "Dedicated tracking number",
        "Weekly call review with us"
      ]
    },
    {
      name: "MARKET LOCK",
      volume: "100+ CALLS / MO",
      price: "$49",
      popular: false,
      features: [
        "Exclusive market lockout",
        "Multi-crew call scheduling",
        "Custom hours + overflow rules",
        "Named account manager"
      ]
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/20 w-8"></div>
          <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Lead Packages</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          PICK YOUR CALL VOLUME
        </h2>
        <p className="text-slate-400 mb-16 max-w-2xl">
          No retainer, no setup fee. You pay per qualified call and cap how many you take per day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`bg-[#132017] rounded-xl flex flex-col p-8 ${
                pkg.popular ? 'border-2 border-[#a2e634] relative scale-100 md:scale-105 z-10 shadow-2xl shadow-[#a2e634]/10' : 'border border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-8 bg-[#a2e634] text-[#0d1611] px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
                  Most Booked
                </div>
              )}
              
              <div className="mb-8 mt-2">
                <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-2">{pkg.name}</h3>
                <p className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase mb-6">{pkg.volume}</p>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-white">{pkg.price}</span>
                  <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">PER QUALIFIED CALL</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#a2e634] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
                pkg.popular 
                  ? 'bg-[#a2e634] hover:bg-[#8cc62c] text-[#0d1611]' 
                  : 'bg-transparent border border-white/20 hover:bg-white/5 text-white'
              }`}>
                Check My Area
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
