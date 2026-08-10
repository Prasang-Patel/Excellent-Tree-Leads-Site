import { Phone } from 'lucide-react';

export default function CallRecordings() {
  const recordings = [
    { id: "014", type: "MASSIVE OAK ON ROOF", desc: "STORM RESPONSE + EMERGENCY TREE REMOVAL", audioSrc: "" },
    { id: "027", type: "TWO TREES + STUMP", desc: "REMOVAL + GRINDING · FRISCO, TX", audioSrc: "" },
    { id: "041", type: "STORM CLEANUP", desc: "STORM RESPONSE · RALEIGH, NC", audioSrc: "" },
    { id: "052", type: "TRIMMING ESTIMATE", desc: "TRIMMING · BOISE, ID", audioSrc: "" }
  ];

  return (
    <section id="recordings" className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/20 w-8"></div>
          <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Recorded Calls</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          LISTEN TO THE KIND OF<br />CALL YOU'D GET
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Homeowner-initiated, in-area, ready to schedule. Every call is recorded so both sides can review it.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recordings.map((rec) => (
            <div key={rec.id} className="bg-[#132017] border border-white/5 rounded-xl p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold tracking-tight uppercase">CALL {rec.id} — {rec.type}</h3>
                <Phone className="w-4 h-4 text-[#a2e634]" />
              </div>
              <p className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase mb-6">{rec.desc}</p>
              
              <div className="w-full">
                <audio controls className="w-full h-12 rounded-md outline-none">
                  <source src={rec.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <p className="text-slate-600 text-[10px] tracking-widest uppercase mt-3">Recording embed slot</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
