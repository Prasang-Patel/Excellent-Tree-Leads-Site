export default function Ticker() {
  const items = [
    "EXCLUSIVE CALLS ONLY",
    "NO SHARED LEADS",
    "REFUND ON UNQUALIFIED CALLS",
    "YOU SET THE DAILY CAP",
    "REMOVAL • TRIMMING • STUMP GRINDING",
    "STORM RESPONSE ROUTING",
    "LIVE TRACKING NUMBERS"
  ];
  
  return (
    <div className="bg-[#0f1f14] border-y border-[#a2e634]/20 py-3 overflow-hidden flex whitespace-nowrap">
      <div className="ticker-track flex items-center">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-[#a2e634] text-xs font-bold tracking-widest uppercase px-6">{item}</span>
            <span className="text-[#a2e634]/30 text-xs">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
