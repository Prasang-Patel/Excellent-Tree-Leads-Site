import { MapPin, Clock } from 'lucide-react';

export default function LeadGallery() {
  const textLeads = [
    {
      name: "DANA R.",
      desc: "Oak removal near roofline",
      location: "Marietta, GA",
      time: "Tue 8:41 AM",
      status: "Ready this week, has HOA approval"
    },
    {
      name: "MIGUEL S.",
      desc: "Two dead pines + stumps",
      location: "Round Rock, TX",
      time: "Wed 11:07 AM",
      status: "Asked for crew availability Friday"
    },
    {
      name: "PATRICIA H.",
      desc: "Storm limb over driveway",
      location: "Naperville, IL",
      time: "Thu 4:22 PM",
      status: "Insurance claim already filed"
    },
    {
      name: "RAY W.",
      desc: "Backyard maple trim",
      location: "Mooresville, NC",
      time: "Fri 9:15 AM",
      status: "Wants estimate on site today"
    }
  ];

  const photoLeads = [
    {
      url: "https://images.unsplash.com/photo-1601002340325-1e3381a17935?auto=format&fit=crop&q=80&w=600",
      title: "STORM DAMAGE REMOVAL",
      subtitle: "ORLANDO, FL · BOOKED $4,800"
    },
    {
      url: "https://images.unsplash.com/photo-1622316521568-d014bc910384?auto=format&fit=crop&q=80&w=600",
      title: "LARGE PINE TAKEDOWN",
      subtitle: "DENVER, CO · BOOKED $3,150"
    },
    {
      url: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600",
      title: "FULL LOT CLEARING",
      subtitle: "CHARLOTTE, NC · BOOKED $6,200"
    },
    {
      url: "https://images.unsplash.com/photo-1588629085695-976db57bd24a?auto=format&fit=crop&q=80&w=600",
      title: "STUMP GRINDING + HAUL",
      subtitle: "COLUMBUS, OH · BOOKED $950"
    }
  ];

  return (
    <section className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/20 w-8"></div>
          <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Example Leads</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight max-w-2xl leading-tight">
          REAL JOBS, REAL CALL RECORDS
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          A sample of calls routed last month. Names shortened for homeowner privacy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {textLeads.map((lead, idx) => (
            <div key={idx} className="bg-[#132017] border border-white/5 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white font-bold tracking-tight">{lead.name}</h3>
                  <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase bg-[#a2e634]/10 border border-[#a2e634]/20 px-2 py-0.5 rounded">Qualified</span>
                </div>
                <p className="text-slate-200 text-sm mb-6 font-medium">{lead.desc}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#a2e634]" />
                    {lead.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#a2e634]" />
                    {lead.time}
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-slate-500 text-xs italic">{lead.status}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {photoLeads.map((photo, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden aspect-[4/3] group border border-white/5">
              <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611] via-[#0d1611]/50 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h4 className="text-white font-bold tracking-tight mb-1">{photo.title}</h4>
                <p className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
