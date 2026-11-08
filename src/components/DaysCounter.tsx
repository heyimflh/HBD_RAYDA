import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Heart } from 'lucide-react';

export function DaysCounter() {
  const [timeStats, setTimeStats] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const meetDate = new Date(content.calendar.meetDate).getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const diffTime = Math.abs(now - meetDate);
      
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      setTimeStats({ days, hours, minutes, seconds });
    };

    updateTimer(); // Initial call
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFFDF9] relative overflow-hidden flex flex-col items-center text-center">
      {/* Decorative Pastel Clay Ambient Glows */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-64 h-64 rounded-full bg-[#EDE9FE]/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-[#FEF08A]/40 blur-3xl pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        {/* 3D Clay Pin / Sticker Heart Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFE4E8] flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_10px_rgba(166,155,145,0.22),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(225,29,72,0.15),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white cursor-pointer select-none"
        >
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#FB7185] fill-[#FB7185] filter drop-shadow-sm" />
        </motion.div>
        
        {/* Description Text Above */}
        <p className="font-body font-medium text-[#7C6A61] text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto">
          Udah selama ini Rayda hadir di muka bumi...
        </p>
        
        {/* Four Colorful 3D Clay Tiles (Clayful Palette) */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-10 max-w-lg mx-auto">
          {/* Hari Tile - Pastel Lilac */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#EDE9FE] p-3 sm:p-5 rounded-3xl sm:rounded-[1.5rem] shadow-[6px_6px_12px_rgba(166,155,145,0.2),_-6px_-6px_12px_rgba(255,255,255,1),_inset_-3px_-3px_6px_rgba(139,92,246,0.15),_inset_3px_3px_6px_rgba(255,255,255,0.95)] border border-purple-200/80 flex flex-col items-center justify-center select-none"
          >
            <span className="font-body font-black text-2xl sm:text-4xl md:text-5xl text-[#5A4036] tracking-tight mb-1 sm:mb-2 leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
              {timeStats.days}
            </span>
            <span className="font-body font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-[#7C3AED]">
              Hari
            </span>
          </motion.div>

          {/* Jam Tile - Pastel Coral Pink */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#FCE7F3] p-3 sm:p-5 rounded-3xl sm:rounded-[1.5rem] shadow-[6px_6px_12px_rgba(166,155,145,0.2),_-6px_-6px_12px_rgba(255,255,255,1),_inset_-3px_-3px_6px_rgba(219,39,119,0.15),_inset_3px_3px_6px_rgba(255,255,255,0.95)] border border-pink-200/80 flex flex-col items-center justify-center select-none"
          >
            <span className="font-body font-black text-2xl sm:text-4xl md:text-5xl text-[#5A4036] tracking-tight mb-1 sm:mb-2 leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
              {timeStats.hours}
            </span>
            <span className="font-body font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-[#DB2777]">
              Jam
            </span>
          </motion.div>

          {/* Menit Tile - Pastel Mint Green */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#DCFCE7] p-3 sm:p-5 rounded-3xl sm:rounded-[1.5rem] shadow-[6px_6px_12px_rgba(166,155,145,0.2),_-6px_-6px_12px_rgba(255,255,255,1),_inset_-3px_-3px_6px_rgba(5,150,105,0.15),_inset_3px_3px_6px_rgba(255,255,255,0.95)] border border-emerald-200/80 flex flex-col items-center justify-center select-none"
          >
            <span className="font-body font-black text-2xl sm:text-4xl md:text-5xl text-[#5A4036] tracking-tight mb-1 sm:mb-2 leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
              {timeStats.minutes}
            </span>
            <span className="font-body font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-[#059669]">
              Menit
            </span>
          </motion.div>

          {/* Detik Tile - Pastel Butter Yellow */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#FEF9C3] p-3 sm:p-5 rounded-3xl sm:rounded-[1.5rem] shadow-[6px_6px_12px_rgba(166,155,145,0.2),_-6px_-6px_12px_rgba(255,255,255,1),_inset_-3px_-3px_6px_rgba(217,119,6,0.15),_inset_3px_3px_6px_rgba(255,255,255,0.95)] border border-amber-200/80 flex flex-col items-center justify-center select-none"
          >
            <span className="font-body font-black text-2xl sm:text-4xl md:text-5xl text-[#5A4036] tracking-tight mb-1 sm:mb-2 leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
              {timeStats.seconds}
            </span>
            <span className="font-body font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-[#D97706]">
              Detik
            </span>
          </motion.div>
        </div>
        
        {/* Description Text Below */}
        <p className="font-body font-medium text-[#7C6A61] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          sejak lu pertama kali lahir ke dunia sampai hari ini. Dan gua bersyukur bisa kenal sahabat seheboh lu, Ray!
        </p>
      </motion.div>
    </section>
  );
}
