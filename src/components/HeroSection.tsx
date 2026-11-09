import { motion } from 'framer-motion';
import { content } from '../data/content';

export function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-between p-6 pt-14 pb-24 md:pb-32 overflow-hidden bg-[#FDF8EE]">
      {/* Decorative Pastel Clay Ambient Glows & Shapes */}
      <div className="absolute top-8 -left-12 w-52 h-52 rounded-full bg-[#FCE7F3]/70 blur-2xl pointer-events-none" />
      <div className="absolute top-1/4 -right-12 w-56 h-56 rounded-full bg-[#EDE9FE]/70 blur-2xl pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-44 h-44 rounded-full bg-[#FEF08A]/60 blur-2xl pointer-events-none" />
      <div className="absolute bottom-36 right-8 w-40 h-40 rounded-full bg-[#D1FAE5]/50 blur-2xl pointer-events-none" />

      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-md mx-auto flex flex-col items-center text-center z-10 my-auto"
      >
        {/* Pastel Lilac Clay Pill Badge: "Spesial buat lu" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EDE9FE] shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-3px_-3px_8px_rgba(255,255,255,1),_inset_-1px_-1px_3px_rgba(139,92,246,0.15),_inset_1.5px_1.5px_3px_rgba(255,255,255,0.95)] border border-purple-200/70 mb-3 select-none"
        >
          <span className="text-xs sm:text-sm font-bold tracking-wide text-[#7C3AED]">
            Spesial buat lu
          </span>
          <span className="text-xs">✨</span>
        </motion.div>
        
        {/* Two-Tone Chunky Clay Heading: "HABEDE RAYNEX" (Crafted with Care Style) */}
        <h1 className="font-body font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-2.5 leading-tight select-none">
          <span className="text-[#5A4036] drop-shadow-[0_2px_0_rgba(255,255,255,0.9)]">HABEDE </span>
          <span className="text-[#FB7185] drop-shadow-[0_2px_0_rgba(255,255,255,0.9)]">RAYNEX</span>
        </h1>
        
        {/* Soft Brownish-Grey Subtitle: "keren ga website nya" */}
        <p className="font-body text-[#7C6A61] text-base sm:text-lg mb-8 px-4 font-medium leading-relaxed">
          {content.hero.subtitle}
        </p>

        {/* Rayda's Photo Container with 3D Claymorphism */}
        <div className="relative mb-8">
          {/* Main 3D Clay Photo Card */}
          <div className="p-3.5 sm:p-4 bg-[#FFF9F2] rounded-[2.2rem] sm:rounded-[2.5rem] shadow-[8px_8px_20px_rgba(166,155,145,0.22),_-8px_-8px_20px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.15),_inset_4px_4px_8px_rgba(255,255,255,0.95)] border-2 border-white">
            <div className="overflow-hidden rounded-[1.6rem] sm:rounded-[1.8rem]">
              <img 
                src={content.hero.photo} 
                alt="Rayda" 
                className="w-60 h-72 sm:w-64 sm:h-80 object-cover object-center block select-none transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Floating 3D Clay Heart Badge */}
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFE4E8] flex items-center justify-center shadow-[4px_4px_10px_rgba(166,155,145,0.25),_-4px_-4px_10px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(225,29,72,0.15),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border border-white z-20 cursor-pointer select-none"
          >
            <span className="text-2xl sm:text-3xl filter drop-shadow-sm">💖</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Chunky Pastel Lilac Clay CTA Pill: "Scroll ke bawah 👇" */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="z-30 mt-2 mb-2 md:mb-4"
      >
        <button 
          onClick={handleScrollDown}
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#A78BFA] text-white font-bold text-sm sm:text-base shadow-[5px_5px_14px_rgba(139,92,246,0.35),_-4px_-4px_10px_rgba(255,255,255,0.9),_inset_-3px_-3px_6px_rgba(109,40,217,0.35),_inset_3px_3px_6px_rgba(255,255,255,0.65)] border border-purple-300/80 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          <span className="tracking-wide">Scroll ke bawah</span>
          <span className="text-lg group-hover:translate-y-0.5 transition-transform duration-200">👇</span>
        </button>
      </motion.div>
    </section>
  );
}
