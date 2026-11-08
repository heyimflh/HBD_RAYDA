import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { MessageCircleHeart, Sparkles } from 'lucide-react';

export function SweetWords() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState(1);

  const getNewNote = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % content.sweetNotes.length);
  };

  return (
    <section className="py-20 sm:py-24 pb-28 sm:pb-36 px-4 sm:px-6 bg-[#FCF5FA] relative flex flex-col items-center min-h-[65vh] justify-center overflow-hidden">
      {/* Decorative Pastel Clay Ambient Glows */}
      <div className="absolute top-12 left-8 w-60 h-60 bg-[#FFE4E8]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-64 h-64 bg-[#EDE9FE]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header Area */}
      <div className="text-center mb-10 z-10 max-w-lg mx-auto px-4">
        {/* 3D Clay Chat Bubble Badge */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-[#FFE4E8] flex items-center justify-center mx-auto mb-5 shadow-[4px_4px_12px_rgba(166,155,145,0.22),_-4px_-4px_12px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(225,29,72,0.15),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border-2 border-white cursor-pointer select-none"
        >
          <MessageCircleHeart className="w-8 h-8 sm:w-9 sm:h-9 text-[#FB7185] fill-[#FFE4E8] filter drop-shadow-sm" strokeWidth={1.8} />
        </motion.div>

        <h2 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight mb-3 select-none">
          <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Catatan Buat </span>
          <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Rayda 📝</span>
        </h2>
        <p className="font-body font-medium text-[#7C6A61] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Ketuk kertas ini buat ngambil pesan dan roastingan random pas lu lagi butuh ketawa.
        </p>
      </div>

      {/* Interactive 3D Clay Yellow Tablet */}
      <div 
        className="relative w-full max-w-sm h-80 sm:h-84 flex justify-center items-center perspective-1000 z-10 cursor-pointer group" 
        onClick={getNewNote}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ rotateX: 90, opacity: 0, y: -20, rotateZ: -5 }}
            animate={{ rotateX: 0, opacity: 1, y: 0, rotateZ: (currentIndex % 2 === 0 ? 2 : -2) }}
            exit={{ rotateX: -90, opacity: 0, y: 20, rotateZ: 5 }}
            transition={{ duration: 0.45, type: 'spring', bounce: 0.35 }}
            whileTap={{ scale: 0.96 }}
            className="absolute w-full h-full flex justify-center items-center"
          >
            {/* The 3D Clay Yellow Slab */}
            <div className="w-[92%] sm:w-full h-full bg-[#FFF5B8] rounded-[2rem] sm:rounded-3xl shadow-[8px_8px_16px_rgba(166,155,145,0.2),_-8px_-8px_16px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.15),_inset_4px_4px_8px_rgba(255,255,255,0.9)] p-6 sm:p-8 flex flex-col items-center justify-between relative border border-white/70 transition-transform group-hover:scale-[1.02]">
              
              {/* 3D Clay Red Button / Pin on Top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FB7185] shadow-[3px_4px_10px_rgba(251,113,133,0.45),_-2px_-2px_6px_rgba(255,255,255,0.9),_inset_-2px_-2px_4px_rgba(190,24,93,0.35),_inset_2px_2px_4px_rgba(255,255,255,0.9)] border-2 border-white flex items-center justify-center z-20">
                <div className="w-3 h-3 rounded-full bg-white/80 absolute top-1.5 left-2 blur-[0.4px]"></div>
              </div>
              
              {/* Subtle Clay Sparkle Accents */}
              <Sparkles className="absolute top-5 left-5 text-yellow-600/25" size={22} />
              <Sparkles className="absolute bottom-10 right-6 text-yellow-600/25" size={18} />

              {/* Note Content Area (Chunky Playful Modern Sans-Serif) */}
              <div className="flex-1 w-full flex items-center justify-center py-4 px-2 text-center">
                <p className="font-body font-black text-2xl sm:text-3xl text-[#5A4036] tracking-tight leading-relaxed drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] select-none">
                  "{content.sweetNotes[currentIndex]}"
                </p>
              </div>

              {/* Bottom helper pill badge */}
              <div className="w-full pt-2 flex items-center justify-center z-10">
                <div className="px-4 py-1.5 rounded-full bg-white/60 shadow-[2px_2px_5px_rgba(166,155,145,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.9)] border border-white/60">
                  <p className="text-[11px] font-body font-bold text-[#8C7A52] uppercase tracking-wider text-center select-none">
                    Ketuk untuk pesan berikutnya ({currentIndex + 1}/{content.sweetNotes.length})
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
