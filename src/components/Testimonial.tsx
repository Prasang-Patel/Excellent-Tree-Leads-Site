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
        
        <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
          {/* Video */}
          <div className="relative w-full max-w-sm mx-auto md:w-1/3 rounded-xl overflow-hidden bg-slate-900 border border-white/10 aspect-[9/16] flex-shrink-0">
            <iframe 
              src="https://player.vimeo.com/video/1134292354?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              title="$35,000 Added In Extra Revenue">
            </iframe>
          </div>
          
          {/* Quote Card */}
          <div className="w-full md:w-2/3 bg-[#132017] rounded-xl border border-white/5 p-8 flex flex-col justify-center">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#a2e634] text-[#a2e634]" />
                ))}
              </div>
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                "Phone rings, homeowner already wants the tree gone. We stopped bidding against four other companies on the same job."
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-white font-bold text-sm">Lance Hopkins</h4>
                <p className="text-slate-400 text-[10px] tracking-wider uppercase mt-1">Hopkins Arbor Care · Georgia, US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
