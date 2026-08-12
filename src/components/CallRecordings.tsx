import { Phone, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import emergencyAudio from '../assets/recordings/emergency.mp3';
import clarenceAudio from '../assets/recordings/clarence.mp3';
import jeffAudio from '../assets/recordings/jeff.mp3';
import milledgevilleAudio from '../assets/recordings/milledgeville.mp3';
import patriciaAudio from '../assets/recordings/patricia.mp3';
import voicemailAudio from '../assets/recordings/voicemail.mp3';

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function AudioPlayer({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !src) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#64748b', // slate-500
      progressColor: '#a2e634', // brand color
      height: 24,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      cursorWidth: 0,
      url: src,
    });

    ws.on('ready', () => {
      setDuration(ws.getDuration());
      setIsReady(true);
    });

    ws.on('audioprocess', () => {
      setCurrentTime(ws.getCurrentTime());
    });

    ws.on('play', () => setIsPlaying(true));
    ws.on('pause', () => setIsPlaying(false));
    ws.on('finish', () => setIsPlaying(false));
    ws.on('seek', () => setCurrentTime(ws.getCurrentTime()));

    wavesurferRef.current = ws;

    return () => {
      ws.destroy();
    };
  }, [src]);

  const togglePlay = () => {
    if (wavesurferRef.current && isReady) {
      wavesurferRef.current.playPause();
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-4 mb-2">
      <button 
        onClick={togglePlay}
        disabled={!isReady}
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isReady ? 'bg-[#a2e634] hover:bg-[#8cc62c] cursor-pointer' : 'bg-[#a2e634]/30 cursor-wait'}`}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-[#0d1611] fill-current" />
        ) : (
          <Play className="w-4 h-4 text-[#0d1611] fill-current ml-1" />
        )}
      </button>
      
      <div className="flex-grow">
        <div ref={containerRef} className="w-full"></div>
      </div>
      <div className="text-slate-400 text-xs font-mono flex-shrink-0 w-12 text-right">
        {isReady ? (isPlaying ? formatTime(currentTime) : formatTime(duration)) : '--:--'}
      </div>
    </div>
  );
}

export default function CallRecordings() {
  const recordings = [
    { id: "01", type: "EMERGENCY TREE REMOVAL", desc: "VOICEMAIL", audioSrc: emergencyAudio },
    { id: "02", type: "STORM RESPONSE TREE REMOVAL", desc: "PHONE CALL", audioSrc: clarenceAudio },
    { id: "03", type: "TREE INSPECTION", desc: "PHONE CALL", audioSrc: jeffAudio },
    { id: "04", type: "4-5 TREE REMOVAL", desc: "PHONE CALL", audioSrc: milledgevilleAudio },
    { id: "05", type: "TREE CUTTING", desc: "PHONE CALL", audioSrc: patriciaAudio },
    { id: "06", type: "TREE REMOVAL", desc: "VOICEMAIL", audioSrc: voicemailAudio }
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
                <h3 className="text-white font-bold tracking-tight uppercase">{rec.type}</h3>
                <Phone className="w-4 h-4 text-[#a2e634]" />
              </div>
              <p className="text-[#a2e634] text-[10px] font-bold tracking-widest uppercase mb-6">{rec.desc}</p>
              
              <AudioPlayer src={rec.audioSrc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
