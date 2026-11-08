import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { X, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export function PhotoGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<number>(0);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSlideDirection(-1);
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : content.gallery.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSlideDirection(1);
    setSelectedIdx((prev) => (prev! < content.gallery.length - 1 ? prev! + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIdx(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  // Aesthetic Claymorphism Polaroid Decorations (3D Plester / Washi Tape & Clay Pins)
  const getClayPolaroidStyle = (idx: number) => {
    const styles = [
      {
        rotation: "rotate-2",
        cardBg: "bg-[#FFFDF9]",
        decoration: (
          <>
            {/* 3D Clay Plester / Washi Tape (Centered) */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-[#EDE9FE] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(139,92,246,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-purple-200/80 rotate-2 z-20 pointer-events-none" />
            {/* 3D Clay Flower Pin */}
            <div className="absolute -bottom-3 -left-3 w-9 h-9 rounded-full bg-[#FFE4E8] shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white flex items-center justify-center z-20 select-none">
              <span className="text-lg">🌸</span>
            </div>
          </>
        ),
      },
      {
        rotation: "-rotate-2",
        cardBg: "bg-[#FFF0F5]",
        decoration: (
          <>
            {/* 3D Pastel Butter Yellow Clay Plester */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-[#FEF08A] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(217,119,6,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-amber-200/80 -rotate-3 z-20 pointer-events-none" />
            {/* 3D Clay Stamp Badge */}
            <div className="absolute bottom-14 right-2 w-10 h-10 rounded-full bg-[#FFE4E8] shadow-[2px_2px_5px_rgba(166,155,145,0.18),_-2px_-2px_5px_rgba(255,255,255,0.9),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.9)] border border-white flex items-center justify-center -rotate-12 z-20 select-none opacity-95">
              <span className="text-[10px] font-bold text-[#E11D48] tracking-wider font-body">RAYDA</span>
            </div>
          </>
        ),
      },
      {
        rotation: "rotate-3",
        cardBg: "bg-[#F0FDF4]",
        decoration: (
          <>
            {/* 3D Pastel Peach Diagonal Corner Plester */}
            <div className="absolute -top-3 -left-2 w-16 h-6 rounded-full bg-[#FED7AA] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(234,88,12,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-orange-200/80 -rotate-12 z-20 pointer-events-none" />
            {/* 3D Clay Heart Pin */}
            <div className="absolute top-3 -right-2 w-9 h-9 rounded-full bg-[#FFE4E8] shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white flex items-center justify-center z-20 select-none">
              <span className="text-lg">💖</span>
            </div>
          </>
        ),
      },
      {
        rotation: "-rotate-3",
        cardBg: "bg-[#FEFCE8]",
        decoration: (
          <>
            {/* 3D Pastel Lavender Angled Plester */}
            <div className="absolute -top-2.5 -right-2 w-16 h-6 rounded-full bg-[#DDD6FE] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(124,58,237,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-purple-200/80 rotate-45 z-20 pointer-events-none" />
            {/* 3D Clay Sparkles Pin */}
            <div className="absolute -bottom-3 -left-3 w-9 h-9 rounded-full bg-white shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(166,155,145,0.1),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white/90 flex items-center justify-center z-20 select-none">
              <span className="text-lg">✨</span>
            </div>
          </>
        ),
      },
      {
        rotation: "rotate-1",
        cardBg: "bg-[#F5F0FF]",
        decoration: (
          <>
            {/* 3D Pastel Coral Pink Top Tab Plester */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-[#FBCFE8] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(219,39,119,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-pink-200/80 rotate-1 z-20 pointer-events-none" />
            {/* 3D Clay Star Pin */}
            <div className="absolute bottom-12 -right-3 w-9 h-9 rounded-full bg-[#FEF08A] shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(217,119,6,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white flex items-center justify-center z-20 select-none">
              <span className="text-lg">⭐</span>
            </div>
          </>
        ),
      },
      {
        rotation: "-rotate-2",
        cardBg: "bg-[#FFF5EB]",
        decoration: (
          <>
            {/* 3D Double Mint Plester */}
            <div className="absolute -top-3 right-4 w-14 h-5 rounded-full bg-[#BBF7D0] shadow-[2px_2px_5px_rgba(166,155,145,0.2),_-2px_-2px_5px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(5,150,105,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-emerald-200/80 rotate-12 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 left-4 w-14 h-5 rounded-full bg-[#BBF7D0] shadow-[2px_2px_5px_rgba(166,155,145,0.2),_-2px_-2px_5px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(5,150,105,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-emerald-200/80 -rotate-6 z-20 pointer-events-none" />
            {/* 3D Clay Cloud Pin */}
            <div className="absolute bottom-4 right-2 w-9 h-9 rounded-full bg-white shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(166,155,145,0.1),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white/90 flex items-center justify-center z-20 select-none">
              <span className="text-lg">☁️</span>
            </div>
          </>
        ),
      },
    ];
    return styles[idx % styles.length];
  };

  return (
    <section className="py-20 px-4 bg-[#FDF8EE] relative overflow-hidden">
      {/* Decorative Pastel Clay Ambient Glows */}
      <div className="absolute top-10 -left-16 w-56 h-56 rounded-full bg-[#FEF08A]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-60 h-60 rounded-full bg-[#FCE7F3]/50 blur-3xl pointer-events-none" />

      {/* Header Area */}
      <div className="text-center mb-10 relative z-10 max-w-xl mx-auto px-4">
        <h2 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight mb-3 select-none">
          <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Momen & </span>
          <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Aib Rayda 📸</span>
        </h2>
        <p className="font-body font-medium text-[#7C6A61] text-base sm:text-lg leading-relaxed">
          Koleksi foto lu yang membuktikan betapa seru dan randomnya pertemanan kita.
        </p>
      </div>

      {/* Horizontal Scrollable Clay Polaroid Cards */}
      <div 
        className="max-w-6xl mx-auto flex gap-5 sm:gap-6 overflow-x-auto pt-10 pb-16 px-6 md:px-8 snap-x snap-mandatory relative z-10" 
        style={{ scrollbarWidth: 'none' }}
      >
        {content.gallery.map((item, idx) => {
          const style = getClayPolaroidStyle(idx);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex-none w-64 sm:w-72 snap-center py-4"
            >
              {/* 3D Claymorphic Polaroid Slab */}
              <div 
                className={`p-3.5 sm:p-4 pb-4 sm:pb-5 ${style.cardBg} rounded-[2rem] sm:rounded-3xl shadow-[8px_8px_16px_rgba(166,155,145,0.2),_-8px_-8px_16px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.15),_inset_4px_4px_8px_rgba(255,255,255,0.9)] border-2 border-white transform transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:rotate-0 cursor-pointer relative flex flex-col justify-between ${style.rotation}`}
                onClick={() => {
                  setSlideDirection(0);
                  setSelectedIdx(idx);
                }}
              >
                {/* 3D Clay Plester & Pins Decoration */}
                {style.decoration}

                {/* 3D Clay Inner Photo Frame */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-[#FAF7F2] relative flex items-center justify-center shadow-inner">
                  <img 
                    src={item.src} 
                    alt={item.caption}
                    className={`w-full h-full object-cover pointer-events-none transition-transform duration-500 hover:scale-105 ${item.position || 'object-center'}`}
                  />
                </div>

                {/* Polaroid Chin / Chunky Caption Area */}
                <div className="h-14 sm:h-16 flex items-center justify-center px-1 text-center overflow-hidden">
                  <p className="w-full font-body font-bold text-sm sm:text-base text-[#5A4036] line-clamp-2 break-words leading-snug select-none">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox / Detail Modal with 3D Claymorphism */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa/80 backdrop-blur-md select-none"
            onClick={() => setSelectedIdx(null)}
          >
            <div 
              className="relative max-w-2xl w-full bg-[#FDFBF7] p-5 sm:p-7 rounded-[2.5rem] shadow-[12px_12px_28px_rgba(166,155,145,0.25),_-12px_-12px_28px_rgba(255,255,255,1),_inset_-4px_-4px_10px_rgba(166,155,145,0.1),_inset_4px_4px_10px_rgba(255,255,255,0.95)] border border-white/90 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              {/* 3D Clay Close Button */}
              <button 
                className="absolute -top-12 right-0 sm:-top-5 sm:-right-5 w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#5A4036] shadow-[4px_4px_10px_rgba(166,155,145,0.25),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(166,155,145,0.12),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white/90 hover:scale-110 active:scale-95 transition-transform p-0 z-30"
                onClick={() => setSelectedIdx(null)}
                aria-label="Tutup"
              >
                <X size={22} />
              </button>

              {/* 3D Clay Counter Badge */}
              <div className="absolute -top-12 left-0 sm:-top-5 sm:-left-5 bg-white px-4 py-1.5 rounded-full text-[#7C6A61] text-xs font-bold tracking-widest uppercase shadow-[4px_4px_10px_rgba(166,155,145,0.2),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-1px_-1px_3px_rgba(166,155,145,0.1),_inset_1px_1px_3px_rgba(255,255,255,0.95)] border border-white/90">
                {selectedIdx + 1} / {content.gallery.length}
              </div>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-[#5A4036] rounded-full shadow-[4px_4px_10px_rgba(166,155,145,0.25),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(166,155,145,0.12),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white/90 flex items-center justify-center z-30 transition-transform hover:scale-110 active:scale-95"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-[#5A4036] rounded-full shadow-[4px_4px_10px_rgba(166,155,145,0.25),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(166,155,145,0.12),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white/90 flex items-center justify-center z-30 transition-transform hover:scale-110 active:scale-95"
                aria-label="Foto Selanjutnya"
              >
                <ChevronRight size={28} />
              </button>

              {/* Slideable Image Area */}
              <div className="w-full overflow-hidden flex items-center justify-center min-h-[45vh] max-h-[62vh] rounded-2xl bg-[#FAF7F2] p-2 shadow-inner">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div
                    key={selectedIdx}
                    custom={slideDirection}
                    initial={{ opacity: 0, x: slideDirection > 0 ? 120 : -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: slideDirection > 0 ? -120 : 120 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40) {
                        handleNext();
                      } else if (info.offset.x > 40) {
                        handlePrev();
                      }
                    }}
                    className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                  >
                    <img 
                      src={content.gallery[selectedIdx].src} 
                      alt={content.gallery[selectedIdx].caption}
                      className="max-h-[58vh] w-auto max-w-full object-contain rounded-xl shadow-sm pointer-events-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Chunky Caption in Modal */}
              <div className="mt-5 flex items-center justify-center gap-2.5 text-[#5A4036] px-4 text-center">
                <Heart size={22} className="text-[#E25C80] fill-[#E25C80] flex-shrink-0 filter drop-shadow-sm" />
                <p className="font-body font-bold text-lg sm:text-2xl text-[#5A4036] leading-snug">
                  {content.gallery[selectedIdx].caption}
                </p>
              </div>

              {/* Swipe hint */}
              <p className="text-xs font-body font-medium text-[#7C6A61] mt-2">
                ← Geser / klik panah untuk melihat foto lainnya →
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
