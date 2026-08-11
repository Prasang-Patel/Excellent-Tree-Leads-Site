import { PhoneCall, CalendarCheck, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "1",
      title: "SPEAK",
      desc: "Speak with a homeowner looking to book you for an estimate."
    },
    {
      num: "2",
      title: "BOOK THEM IN",
      desc: "Book them in for an estimate or job directly over the phone."
    },
    {
      num: "3",
      title: "CLOSE THE JOB",
      desc: "Close the job and grow your business without competing with multiple contractors."
    }
  ];

  return (
    <section className="py-24 bg-[#0d1611] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight text-center uppercase">
          A SIMPLE 3 STEP SYSTEM
        </h2>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#a2e634]/30 to-transparent z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#132017] border border-[#a2e634]/30 flex items-center justify-center text-3xl font-black text-[#a2e634] mb-8 shadow-[0_0_30px_rgba(162,230,52,0.1)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
