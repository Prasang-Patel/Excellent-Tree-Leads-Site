import { PlayCircle, Star } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="proof" className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/20 w-8"></div>
          <span className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase">Owner Testimonial</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight max-w-2xl leading-tight">
          HEAR IT FROM A CREW THAT BOOKS OUR CALLS EVERY WEEK
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Video Placeholder */}
          <div className="relative md:w-2/3 rounded-xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer border border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#a2e634] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#a2e634] transition-all duration-300">
                <PlayCircle className="w-8 h-8 text-[#a2e634] group-hover:text-[#0d1611] ml-1" />
              </div>
              <p className="text-white font-bold tracking-widest uppercase text-sm">Testimonial Video</p>
              <p className="text-slate-400 text-[10px] tracking-widest uppercase mt-2">Embed slot — Paste your video here</p>
            </div>
          </div>
          
          {/* Quote Card */}
          <div className="md:w-1/3 bg-[#132017] rounded-xl border border-white/5 p-8 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#a2e634] text-[#a2e634]" />
                ))}
              </div>
              <p className="text-white text-lg font-medium leading-relaxed italic mb-8">
                "Phone rings, homeowner already wants the tree gone. We stopped bidding against four other companies on the same job."
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Cody Bennett" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-white font-bold text-sm">Cody Bennett</h4>
                <p className="text-slate-400 text-[10px] tracking-wider uppercase mt-1">Bennett Tree & Limb · Round Rock, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
