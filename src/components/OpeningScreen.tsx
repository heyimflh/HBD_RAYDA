import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface OpeningScreenProps {
  onOpen: () => void;
}

export function OpeningScreen({ onOpen }: OpeningScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-ivory to-baby-pink p-4"
    >
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-blush/30"
            initial={{ 
              y: '100vh', 
              x: `${Math.random() * 100}vw`,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: '-20vh',
              rotate: Math.random() * 360 + 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-sm w-full text-center relative z-10 flex flex-col items-center"
      >
        <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <Heart className="text-dusty-rose" fill="#D9889B" size={32} />
        </div>
        
        <p className="font-body text-cocoa/80 mb-8 italic text-lg">
          "Woy Ray! Ada sesuatu spesial nih buat ulang tahun lu... Buka dulu gih!"
        </p>

        <button
          onClick={onOpen}
          className="bg-gradient-to-r from-dusty-rose to-peach text-white px-8 py-3 rounded-full font-body font-semibold tracking-wide shadow-[0_10px_20px_rgba(217,136,155,0.4)] hover:shadow-[0_15px_25px_rgba(217,136,155,0.6)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          Buka Kado Digital
        </button>
      </motion.div>
    </motion.div>
  );
}
