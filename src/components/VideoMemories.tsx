import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Film, Play, Heart, X, Maximize2 } from 'lucide-react';

function VideoCard({ 
  video, 
  onPlay, 
  onPause,
  onOpenDetail
}: { 
  video: any; 
  onPlay: (v: HTMLMediaElement) => void; 
  onPause: (v: HTMLMediaElement) => void;
  onOpenDetail: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            // Attempt to autoplay muted preview
            videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    }, { threshold: 0.6 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="p-5 sm:p-6 bg-[#FFFDF9] rounded-[2.5rem] shadow-[8px_8px_20px_rgba(166,155,145,0.22),_-8px_-8px_20px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.12),_inset_4px_4px_8px_rgba(255,255,255,0.95)] border-2 border-white transform transition-all duration-300 hover:scale-[1.02] relative w-80 sm:w-96 md:w-[480px] max-w-full mx-auto flex flex-col justify-between"
    >
      {/* 3D Pastel Clay Plester / Washi Tape (Butter Yellow / Lilac) */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-[#EDE9FE] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(139,92,246,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-purple-200/80 rotate-1 z-20 pointer-events-none" />

      {/* 3D Clay Pin Badge */}
      <div className="absolute -bottom-3 -right-3 w-11 h-11 rounded-full bg-[#FFE4E8] flex items-center justify-center shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white z-20 select-none">
        <span className="text-xl">🎬</span>
      </div>
      
      {/* 16:9 Landscape Video Frame */}
      <div 
        className="w-full aspect-video rounded-2xl mb-4 relative overflow-hidden bg-black/95 cursor-pointer group flex items-center justify-center shadow-inner border border-stone-200/40"
        onClick={togglePlay}
      >
        <video 
          ref={videoRef}
          src={video.src}
          playsInline
          loop
          className="w-full h-full object-contain rounded-2xl"
          onPlay={(e) => {
            setIsPlaying(true);
            onPlay(e.currentTarget);
          }}
          onPause={(e) => {
            setIsPlaying(false);
            onPause(e.currentTarget);
          }}
        />
        
        {/* Custom 3D Play Button Overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/35 z-20"
            >
              <div className="w-16 h-16 rounded-full bg-white text-[#5A4036] shadow-[0_8px_20px_rgba(0,0,0,0.35),_inset_-2px_-2px_4px_rgba(166,155,145,0.2),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play fill="#FB7185" size={26} className="ml-1 text-[#FB7185]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Maximize Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (videoRef.current) videoRef.current.pause();
            onOpenDetail();
          }}
          className="absolute top-2.5 right-2.5 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm z-30 transition-transform active:scale-95 flex items-center gap-1.5 text-xs px-3 font-body font-medium"
          title="Buka Layar Penuh"
        >
          <Maximize2 size={13} />
          <span className="hidden sm:inline">Perbesar</span>
        </button>
      </div>
      
      {/* Caption & 3D Pill Button Area */}
      <div className="flex flex-col items-center justify-center px-2 text-center pb-1">
        <p className="w-full font-body font-bold text-base sm:text-lg text-[#5A4036] leading-relaxed mb-4">
          {video.caption}
        </p>

        {/* 3D Claymorphic Vibrant Lilac Pill Button (Clayful Style) */}
        <button
          onClick={() => {
            if (videoRef.current) videoRef.current.pause();
            onOpenDetail();
          }}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#A78BFA] text-white font-body font-bold text-sm shadow-[0_6px_14px_rgba(167,139,250,0.4),_inset_0_2px_2px_rgba(255,255,255,0.7),_inset_0_-2px_4px_rgba(124,58,237,0.3)] hover:bg-[#9066F6] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          <Maximize2 size={16} className="text-white" />
          <span>Buka Detail Video</span>
        </button>
      </div>
    </div>
  );
}

export function VideoMemories() {
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  const handlePlay = (currentTarget: HTMLMediaElement) => {
    // Pause all other media
    const medias = document.querySelectorAll('video, audio');
    medias.forEach(media => {
      if (media !== currentTarget) {
        (media as HTMLMediaElement).pause();
      }
    });
  };

  const handlePause = (currentTarget: HTMLMediaElement) => {
    // Check if any video is still playing
    const videos = document.querySelectorAll('video');
    let anyPlaying = false;
    videos.forEach(v => {
      if (!v.paused && v !== currentTarget) {
        anyPlaying = true;
      }
    });

    // If no videos are playing, resume background music
    if (!anyPlaying) {
      const audio = document.querySelector('audio');
      if (audio) {
        audio.play().catch(e => console.log("BGM autoplay prevented:", e));
      }
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(e => console.log("BGM resume prevented:", e));
    }
  };

  return (
    <section className="py-20 px-4 bg-[#FDF8EE] relative overflow-hidden">
      {/* Decorative Pastel Clay Ambient Glows */}
      <div className="absolute top-10 -left-16 w-60 h-60 bg-[#FFE7A0]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-64 h-64 bg-[#FFB5C6]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* 3D Clay Roll Film Icon Button */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl sm:rounded-3xl bg-[#FFE4E8] flex items-center justify-center mx-auto mb-5 shadow-[4px_4px_12px_rgba(166,155,145,0.22),_-4px_-4px_12px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(225,29,72,0.15),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border-2 border-white cursor-pointer select-none"
          >
            <Film className="w-8 h-8 sm:w-9 sm:h-9 text-[#FB7185] filter drop-shadow-sm" />
          </motion.div>

          <h2 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight mb-3 select-none">
            <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Video Momen </span>
            <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Berharga 🎬</span>
          </h2>
          <p className="font-body font-medium text-[#7C6A61] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Waktu jalan terus, tapi momen seru kita ber-12 bakal selalu berbekas.
          </p>
        </div>

        {/* Video Card Container */}
        <div className="flex justify-center px-4 pt-4 pb-8">
          {content.videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full flex justify-center py-2"
            >
              <VideoCard 
                video={video} 
                onPlay={handlePlay} 
                onPause={handlePause} 
                onOpenDetail={() => setSelectedVideo(video)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Detail Modal (3D Claymorphic Cinema View) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/80 backdrop-blur-md select-none"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full bg-[#FDFBF7] p-5 sm:p-7 rounded-[2.5rem] shadow-[12px_12px_28px_rgba(166,155,145,0.25),_-12px_-12px_28px_rgba(255,255,255,1),_inset_-4px_-4px_10px_rgba(166,155,145,0.1),_inset_4px_4px_10px_rgba(255,255,255,0.95)] border border-white/90 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              {/* 3D Clay Close Button */}
              <button 
                className="absolute -top-12 right-0 sm:-top-5 sm:-right-5 w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#5A4036] shadow-[4px_4px_10px_rgba(166,155,145,0.25),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(166,155,145,0.12),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white/90 hover:scale-110 active:scale-95 transition-transform p-0 z-30"
                onClick={handleCloseModal}
                aria-label="Tutup Video"
              >
                <X size={22} />
              </button>

              {/* 16:9 Landscape Video Player */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner relative flex items-center justify-center">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain rounded-2xl"
                  onPlay={() => {
                    const audio = document.querySelector('audio');
                    if (audio) audio.pause();
                  }}
                  onPause={() => {
                    const audio = document.querySelector('audio');
                    if (audio) audio.play().catch(() => {});
                  }}
                />
              </div>

              {/* Chunky Caption in Modal */}
              <div className="mt-5 flex items-center justify-center gap-2.5 text-[#5A4036] px-4 text-center max-w-xl">
                <Heart size={22} className="text-[#E25C80] fill-[#E25C80] flex-shrink-0 filter drop-shadow-sm" />
                <p className="font-body font-bold text-base sm:text-xl text-[#5A4036] leading-snug">
                  {selectedVideo.caption}
                </p>
              </div>

              <p className="text-xs font-body font-medium text-[#7C6A61] mt-2">
                Tekan tombol putar atau gunakan kontrol video untuk memutar dengan suara
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
