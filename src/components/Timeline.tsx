import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Sparkles, Map, CheckCircle2, Clock } from 'lucide-react';

export function Timeline() {
  const cardThemes = [
    {
      cardBg: "bg-[#FFFDF9]",
      badge: "bg-[#EDE9FE] text-[#7C3AED] border-purple-200/70",
      marker: "bg-[#A78BFA] border-[#C4B5FD] shadow-[2px_2px_6px_rgba(167,139,250,0.4)]",
    },
    {
      cardBg: "bg-[#FFF5F8]",
      badge: "bg-[#FFE4E8] text-[#E11D48] border-rose-200/70",
      marker: "bg-[#FB7185] border-[#FDA4AF] shadow-[2px_2px_6px_rgba(251,113,133,0.4)]",
    },
    {
      cardBg: "bg-[#FEFCE8]",
      badge: "bg-[#FEF9C3] text-[#B45309] border-amber-200/70",
      marker: "bg-[#FBBF24] border-[#FDE68A] shadow-[2px_2px_6px_rgba(251,191,36,0.4)]",
    },
    {
      cardBg: "bg-[#F0FDF4]",
      badge: "bg-[#DCFCE7] text-[#15803D] border-emerald-200/70",
      marker: "bg-[#34D399] border-[#A7F3D0] shadow-[2px_2px_6px_rgba(52,211,153,0.4)]",
    },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FDF8EE] relative overflow-hidden">
      {/* Decorative Pastel Ambient Glows */}
      <div className="absolute top-10 -left-16 w-64 h-64 bg-[#FFE4E8]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-64 h-64 bg-[#EDE9FE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header Area */}
        <div className="text-center mb-14">
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-[#EDE9FE] flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_12px_rgba(166,155,145,0.22),_-4px_-4px_12px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(139,92,246,0.15),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border-2 border-white cursor-pointer select-none"
          >
            <span className="text-2xl sm:text-3xl filter drop-shadow-sm select-none">🚀</span>
          </motion.div>
          <h2 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight select-none">
            <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Timeline Pertemanan </span>
            <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Kita</span>
          </h2>
        </div>
        
        {/* Timeline Track & Cards */}
        <div className="relative ml-4 sm:ml-8">
          {/* Vertical Thick Clay Track */}
          <div className="absolute left-3 top-6 bottom-6 w-2.5 bg-[#FCE4EC] rounded-full shadow-[inset_1px_1px_2px_rgba(166,155,145,0.2),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] -translate-x-1/2" />

          {content.timeline.map((item, idx) => {
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -25, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true, margin: "-40px" }}
                className="mb-8 sm:mb-10 relative flex items-start"
              >
                {/* 3D Clay Colorful Bead Marker */}
                <div className={`absolute left-3 -translate-x-1/2 top-7 w-7 h-7 rounded-full ${theme.marker} border-2 z-20 flex items-center justify-center select-none`}>
                  <div className="w-2 h-2 rounded-full bg-white/80 absolute top-1 left-1 blur-[0.3px]" />
                </div>

                {/* 3D Clay Story Card */}
                <div className={`ml-8 sm:ml-10 w-full ${theme.cardBg} p-6 sm:p-7 rounded-[2rem] sm:rounded-3xl shadow-[8px_8px_18px_rgba(166,155,145,0.2),_-8px_-8px_18px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.12),_inset_4px_4px_8px_rgba(255,255,255,0.95)] border-2 border-white transition-all duration-300 hover:scale-[1.02]`}>
                  {/* 3D Clay Date Pill Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-body font-bold uppercase tracking-wider mb-2.5 shadow-[1px_1px_3px_rgba(166,155,145,0.12),inset_1px_1px_2px_rgba(255,255,255,0.8)] border ${theme.badge}`}>
                    {item.date}
                  </span>
                  <h3 className="font-body font-extrabold text-xl text-[#5A4036] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body font-medium text-sm sm:text-base text-[#7C6A61] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Wishlist() {
  const cardPalettes = [
    { cardBg: "bg-[#FFFDF9]", tapeBg: "bg-[#EDE9FE]", tapeBorder: "border-purple-200/80" }, // cream + lilac tape
    { cardBg: "bg-[#FFF0F5]", tapeBg: "bg-[#FEF08A]", tapeBorder: "border-amber-200/80" }, // blush pink + yellow tape
    { cardBg: "bg-[#F0FDF4]", tapeBg: "bg-[#FBCFE8]", tapeBorder: "border-pink-200/80" }, // mint + pink tape
    { cardBg: "bg-[#FEFCE8]", tapeBg: "bg-[#EDE9FE]", tapeBorder: "border-purple-200/80" }, // butter + lilac tape
    { cardBg: "bg-[#F5F0FF]", tapeBg: "bg-[#BBF7D0]", tapeBorder: "border-emerald-200/80" }, // lilac + mint tape
    { cardBg: "bg-[#FFF5EB]", tapeBg: "bg-[#FBCFE8]", tapeBorder: "border-pink-200/80" }, // peach + pink tape
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFF7F9] relative overflow-hidden">
      {/* Decorative Pastel Ambient Glows */}
      <div className="absolute top-10 -left-16 w-64 h-64 bg-[#FFE4E8]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-72 h-72 bg-[#EDE9FE]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Playful Background Paper Airplane */}
      <div className="absolute top-12 right-6 sm:right-12 opacity-25 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2Z" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* 3D Clay Map Icon Button */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-[#FFE4E8] flex items-center justify-center mx-auto mb-5 shadow-[4px_4px_12px_rgba(166,155,145,0.22),_-4px_-4px_12px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(225,29,72,0.15),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border-2 border-white cursor-pointer select-none relative"
          >
            <Map className="w-8 h-8 sm:w-9 sm:h-9 text-[#FB7185] filter drop-shadow-sm" strokeWidth={1.8} />
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1.5 -right-1.5 text-yellow-400 select-none"
            >
              <Sparkles size={18} fill="#FACC15" />
            </motion.div>
          </motion.div>

          <h2 className="font-body font-extrabold text-3xl sm:text-4xl tracking-tight mb-4 select-none">
            <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Wishlist Nongkrong & </span>
            <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">Rencana Kita 🛵</span>
          </h2>

          {/* 3D Clay Pill Bubble Deskripsi */}
          <div className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white/95 shadow-[4px_4px_12px_rgba(166,155,145,0.18),_-4px_-4px_12px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(166,155,145,0.1),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white max-w-xl mx-auto">
            <p className="font-body font-medium text-[#7C6A61] text-sm sm:text-base leading-relaxed text-center">
              Semoga agenda-agenda seru ini bisa kita gas bareng ya, Ray! 🔥
            </p>
          </div>
        </motion.div>

        {/* 3D Clay Wishlist Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 md:gap-8 pt-4">
          {content.wishlist.map((item, idx) => {
            const rotations = [2, -2, 2.5, -2.5, 1.5, -1.5];
            const rotation = rotations[idx % rotations.length];
            const palette = cardPalettes[idx % cardPalettes.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
                transition={{ 
                  duration: 0.45, 
                  delay: (idx % 3) * 0.1,
                  type: "spring",
                  bounce: 0.35
                }}
                viewport={{ once: true, margin: "-30px" }}
                style={{ rotate: rotation }}
                className={`w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] max-w-sm ${palette.cardBg} p-6 pt-8 rounded-[2rem] sm:rounded-3xl shadow-[8px_8px_18px_rgba(166,155,145,0.2),_-8px_-8px_18px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.12),_inset_4px_4px_8px_rgba(255,255,255,0.95)] border-2 border-white relative flex flex-col justify-between group cursor-pointer`}
              >
                {/* 3D Thick Clay Plester / Washi Tape (Di Tengah Atas) */}
                <div 
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full ${palette.tapeBg} shadow-[2px_3px_6px_rgba(166,155,145,0.25),_-2px_-2px_5px_rgba(255,255,255,0.95),_inset_-1px_-1px_2px_rgba(166,155,145,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border ${palette.tapeBorder} rotate-1 z-20 pointer-events-none`}
                />

                <div className="relative z-10 pr-2">
                  <h3 className="font-body font-extrabold text-lg sm:text-xl text-[#5A4036] mb-2 leading-snug">
                    {item.place}
                  </h3>
                  
                  <p className="font-body font-medium text-xs sm:text-sm text-[#7C6A61] mb-6 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
                
                {/* 3D Clay Status Pill Badge */}
                <div className="relative z-10 flex justify-end mt-auto pt-2">
                  {item.status === 'Dream' && (
                    <div className="bg-[#EDE9FE] text-[#7C3AED] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_6px_rgba(124,58,237,0.2),_-2px_-2px_5px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(124,58,237,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-purple-200/80 text-xs font-bold uppercase tracking-wider select-none transform group-hover:rotate-3 transition-transform">
                      <Sparkles size={13} className="text-[#7C3AED]" />
                      <span>{item.status}</span>
                    </div>
                  )}
                  {item.status === 'Soon' && (
                    <div className="bg-[#FFE4E8] text-[#E11D48] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_6px_rgba(225,29,72,0.2),_-2px_-2px_5px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-rose-200/80 text-xs font-bold uppercase tracking-wider select-none transform group-hover:-rotate-3 transition-transform">
                      <Clock size={13} className="text-[#E11D48]" />
                      <span>{item.status}</span>
                    </div>
                  )}
                  {item.status === 'Planned' && (
                    <div className="bg-[#DCFCE7] text-[#059669] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_6px_rgba(5,150,105,0.2),_-2px_-2px_5px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(5,150,105,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-emerald-200/80 text-xs font-bold uppercase tracking-wider select-none transform group-hover:rotate-3 transition-transform">
                      <CheckCircle2 size={13} className="text-[#059669]" />
                      <span>{item.status}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
