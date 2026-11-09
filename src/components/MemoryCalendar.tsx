import { motion } from 'framer-motion';
import { content } from '../data/content';
import { CalendarHeart, MapPin } from 'lucide-react';

export function MemoryCalendar() {
  const dateObj = new Date(content.calendar.meetDate);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('id-ID', { month: 'long' });
  const year = dateObj.getFullYear();

  return (
    <section className="py-20 px-6 bg-[#FDF8EE] relative overflow-hidden">
      {/* Decorative Pastel Clay Ambient Glows */}
      <div className="absolute top-12 -left-16 w-52 h-52 rounded-full bg-[#FEF08A]/40 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-56 h-56 rounded-full bg-[#FCE7F3]/50 blur-2xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-md mx-auto relative z-10"
      >
        {/* Main 3D Claymorphic Calendar Card (Clayful Widget Style) */}
        <div className="overflow-hidden rounded-[2.5rem] bg-[#FFFDF9] shadow-[8px_8px_18px_rgba(166,155,145,0.22),_-8px_-8px_18px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(255,255,255,0.6),_inset_4px_4px_8px_rgba(166,155,145,0.1)] border-2 border-white transition-all duration-300">
          
          {/* Top Coral-Pink Calendar Clay Header Banner */}
          <div className="bg-[#FB7185] py-4 px-6 shadow-[inset_0_-3px_6px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 select-none">
            <CalendarHeart className="w-5 h-5 text-white filter drop-shadow-sm" />
            <span className="text-white font-body font-bold text-xs sm:text-sm tracking-widest uppercase drop-shadow-sm">
              {content.calendar.title || "Hari Brojol Rayda"}
            </span>
          </div>

          <div className="p-7 sm:p-9 text-center">
            {/* Big Chunky 3D Clay Date */}
            <div className="my-3">
              <div className="text-6xl sm:text-7xl font-body font-black text-[#5A4036] tracking-tight leading-none drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] mb-2 select-none">
                {day}
              </div>
              <div className="text-xl sm:text-2xl font-body font-bold text-[#FB7185] tracking-wide select-none">
                {month} {year}
              </div>
            </div>

            {/* Casual Tongkrongan Description */}
            <p className="font-body font-medium text-[#7C6A61] text-base sm:text-lg mb-7 px-2 leading-relaxed">
              {content.calendar.momentName}
            </p>

            {/* 3D Clay Candy/Pill Location Badge in Pastel Mint */}
            {content.calendar.location && (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#DCFCE7] text-[#065F46] font-bold text-sm shadow-[3px_3px_8px_rgba(5,150,105,0.2),_-3px_-3px_8px_rgba(255,255,255,0.9),_inset_-1.5px_-1.5px_3px_rgba(5,150,105,0.15),_inset_1.5px_1.5px_3px_rgba(255,255,255,0.95)] border border-emerald-200/80 cursor-default select-none mx-auto"
              >
                <MapPin size={16} className="text-[#059669]" />
                <span className="tracking-wide">{content.calendar.location}</span>
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
