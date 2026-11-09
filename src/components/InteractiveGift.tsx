import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { content } from '../data/content';
import { Gift, Heart } from 'lucide-react';

interface ReasonCardProps {
  reason: string;
  index: number;
  total: number;
  onNext: () => void;
  direction: number;
}

function ActiveCard({ reason, index, total, onNext, direction }: ReasonCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-16, 0, 16]);
  const opacity = useTransform(x, [-260, -180, 0, 180, 260], [0.3, 1, 1, 1, 0.3]);

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.65}
      onDragEnd={(_, info) => {
        // If swiped left or right past threshold or fast enough
        if (Math.abs(info.offset.x) > 65 || Math.abs(info.velocity.x) > 300) {
          onNext();
        }
      }}
      onClick={onNext}
      initial={{ 
        scale: 0.94, 
        y: 12, 
        opacity: 0,
        rotate: direction > 0 ? -4 : 4
      }}
      animate={{ 
        scale: 1, 
        y: 0, 
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 360, damping: 25 }
      }}
      exit={{ 
        x: direction > 0 ? 320 : -320, 
        y: -30,
        rotate: direction > 0 ? 22 : -22, 
        opacity: 0,
        transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] }
      }}
      whileTap={{ scale: 0.98, cursor: "grabbing" }}
      className="absolute inset-0 bg-[#FFFDF9] rounded-[2.5rem] p-6 sm:p-8 shadow-[10px_10px_24px_rgba(166,155,145,0.22),_-10px_-10px_24px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.1),_inset_4px_4px_8px_rgba(255,255,255,0.95)] flex flex-col justify-between items-center border-2 border-white cursor-grab active:cursor-grabbing select-none touch-pan-y"
    >
      {/* 3D Pastel Washi Tape (Centered on top edge) */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-[#EDE9FE] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(139,92,246,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-purple-200/80 rotate-1 z-20 pointer-events-none" />

      {/* Card Header Pill Badge */}
      <div className="pt-2 z-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE4E8] text-[#FB7185] text-xs font-body font-bold uppercase tracking-wider shadow-[1px_1px_3px_rgba(166,155,145,0.12),inset_1px_1px_2px_rgba(255,255,255,0.85)] border border-rose-200/60 select-none">
          <span>✨</span>
          <span>Alasan #{index + 1}</span>
        </span>
      </div>

      {/* Main Reason Text (Roomy, Clean, Non-Overflowing) */}
      <div className="flex-1 w-full flex items-center justify-center px-3 sm:px-5 py-3 text-center my-auto z-10">
        <p className="font-body font-extrabold text-lg sm:text-xl md:text-2xl text-[#5A4036] leading-relaxed select-none">
          "{reason}"
        </p>
      </div>

      {/* Card Bottom Area: 3D Clay Pill Counter & Drag Hint */}
      <div className="w-full pt-1 pb-1 flex flex-col items-center justify-center gap-2 z-10">
        {/* 3D Clay Pill Counter Badge (Clayful Style) */}
        <div className="bg-[#A78BFA] text-white px-6 py-1.5 rounded-full text-xs sm:text-sm font-body font-bold shadow-[0_4px_10px_rgba(167,139,250,0.35),_inset_0_2px_2px_rgba(255,255,255,0.7),_inset_0_-2px_4px_rgba(124,58,237,0.3)] tracking-wider select-none">
          {index + 1} / {total}
        </div>

        <p className="text-[11px] font-body font-bold uppercase tracking-wider text-[#7C6A61]/60 select-none">
          Geser atau ketuk kartu
        </p>
      </div>
    </motion.div>
  );
}

export function InteractiveGift() {
  const [opened, setOpened] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReason = () => {
    setDirection(1);
    setCurrentReason((prev) => (prev + 1) % content.reasons.length);
  };

  return (
    <section className="py-24 px-6 bg-[#FDF8EE] relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Decorative Pastel Ambient Glows */}
      <div className="absolute top-12 left-10 w-64 h-64 bg-[#FFE4E8]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-72 h-72 bg-[#EDE9FE]/50 rounded-full blur-3xl pointer-events-none" />

      {!opened ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
          className="cursor-pointer group flex flex-col items-center z-10"
        >
          {/* 3D Fluffy Clay Gift Box */}
          <div className="relative mb-8">
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-44 h-44 sm:w-48 sm:h-48 bg-[#FB7185] rounded-[2.5rem] shadow-[10px_10px_24px_rgba(251,113,133,0.35),_-8px_-8px_20px_rgba(255,255,255,1),_inset_-5px_-5px_10px_rgba(190,24,93,0.3),_inset_5px_5px_10px_rgba(255,255,255,0.7)] flex items-center justify-center relative transform transition-transform group-hover:scale-105 border-4 border-white/80 overflow-hidden"
            >
              {/* 3D Butter Yellow Ribbons */}
              <div className="absolute top-1/2 left-0 right-0 h-10 -translate-y-1/2 bg-[#FDE047] shadow-[inset_0_2px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(202,138,4,0.3)] pointer-events-none" />
              <div className="absolute left-1/2 top-0 bottom-0 w-10 -translate-x-1/2 bg-[#FDE047] shadow-[inset_2px_0_2px_rgba(255,255,255,0.9),inset_-2px_0_4px_rgba(202,138,4,0.3)] pointer-events-none" />

              {/* Center Bow / Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_2px_2px_rgba(255,255,255,0.95)] flex items-center justify-center border-2 border-amber-200">
                <Gift size={34} className="text-[#FB7185]" strokeWidth={2.2} />
              </div>
              
              {/* Floating 3D Heart Badge */}
              <div className="absolute -top-3 -right-3 bg-white w-12 h-12 rounded-full shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border-2 border-white flex items-center justify-center z-20">
                <Heart size={24} className="text-[#FB7185] animate-pulse" fill="currentColor" />
              </div>
            </motion.div>
          </div>
          
          <h3 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight mb-3 select-none text-center">
            <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Ada Kado Nih </span>
            <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Buat Lu 🎁</span>
          </h3>

          <div className="mt-2 inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-white/95 shadow-[4px_4px_12px_rgba(166,155,145,0.18),_-4px_-4px_12px_rgba(255,255,255,1),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white">
            <p className="font-body font-medium text-[#7C6A61] text-base leading-relaxed text-center">
              Sentuh kotaknya buat buka hadiahnya ✨
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.35 }}
          className="w-full max-w-md z-10 flex flex-col items-center relative"
        >
          {/* Section Header */}
          <div className="text-center mb-8 px-4">
            <h3 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight mb-2 select-none">
              <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Alasan Lu </span>
              <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Temen Terbaik 👊</span>
            </h3>
            <p className="font-body font-medium text-[#7C6A61] text-base">
              Ketuk kartunya buat baca alasan lainnya.
            </p>
          </div>
          
          {/* Realistic 3D Physical Card Deck Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[360px] sm:h-[390px] mx-auto perspective-1000 mb-4">
            
            {/* Under-Card 2 (Deepest in deck): Pastel Lilac Clay Card */}
            <div 
              className="absolute inset-0 bg-[#EDE9FE] rounded-[2.5rem] border-2 border-white shadow-[6px_6px_16px_rgba(166,155,145,0.16)] pointer-events-none transform translate-y-3.5 rotate-3 scale-[0.92] transition-transform duration-300"
              aria-hidden="true"
            />

            {/* Under-Card 1 (Middle in deck): Pastel Coral Pink Clay Card */}
            <div 
              className="absolute inset-0 bg-[#FFE4E8] rounded-[2.5rem] border-2 border-white shadow-[6px_6px_16px_rgba(166,155,145,0.18)] pointer-events-none transform translate-y-2 -rotate-2 scale-[0.96] transition-transform duration-300"
              aria-hidden="true"
            />

            {/* Active Front Card with Swipe & Shuffle Animation */}
            <AnimatePresence mode="popLayout" initial={false}>
              <ActiveCard
                key={currentReason}
                reason={content.reasons[currentReason]}
                index={currentReason}
                total={content.reasons.length}
                onNext={nextReason}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          {/* Pagination Indicators (Clay Dots) */}
          <div className="flex items-center justify-center gap-2 mt-4 select-none">
            {content.reasons.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentReason ? 1 : -1);
                  setCurrentReason(i);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === currentReason
                    ? "w-7 h-2.5 bg-[#FB7185] shadow-[0_2px_6px_rgba(251,113,133,0.4)]"
                    : "w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Lihat alasan nomor ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Decorative background floating elements when opened */}
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#FB7185]/30"
              initial={{ 
                y: '100vh', 
                x: `${Math.random() * 100}vw`,
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: '-20vh',
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {i % 2 === 0 ? <Heart size={22} fill="currentColor" /> : <span className="text-lg">✨</span>}
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
