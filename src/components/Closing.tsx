import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Closing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-baby-pink to-rose-blush/30 relative flex flex-col items-center text-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-dusty-rose/20 transform -rotate-12">
        <Heart size={64} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-peach/30 transform rotate-12">
        <Heart size={48} fill="currentColor" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto z-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl text-rosewood mb-8 leading-tight">
          "Gua gak tahu ke depannya bakal seseru apa, tapi yang jelas gua bersyukur banget punya sahabat kek lu, Ray. Tetap solid ya bro!"
        </h2>

        <p className="font-signature text-4xl text-dusty-rose mb-12">
          Happy Birthday, Rayda! 🎉
        </p>

        <button 
          onClick={scrollToTop}
          className="bg-white/80 backdrop-blur-sm text-cocoa px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-white transition-all text-sm font-semibold uppercase tracking-widest border border-rose-blush/30"
        >
          Kembali ke atas
        </button>
      </motion.div>
    </section>
  );
}
