import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { content } from '../data/content';
import { HeartHandshake } from 'lucide-react';

export function LoveLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      setIsTyping(true);
      
      let currentPara = 0;
      let currentChar = 0;
      let tempDisplay: string[] = [''];
      let isActive = true;

      const typeNextChar = () => {
        if (!isActive) return;

        if (currentPara >= content.letter.length) {
          setIsTyping(false);
          return;
        }

        const paragraph = content.letter[currentPara];
        
        if (currentChar < paragraph.length) {
          tempDisplay[currentPara] = paragraph.substring(0, currentChar + 1);
          setDisplayedText([...tempDisplay]);
          
          const char = paragraph[currentChar];
          currentChar++;
          
          // Realistic typing delay
          let delay = Math.random() * 50 + 30; // 30-80ms default
          if (char === '.' || char === ',' || char === '!') {
            delay = 300; // Pause at punctuation
          } else if (char === ' ') {
            delay = 60;
          }

          setTimeout(typeNextChar, delay);
        } else {
          currentPara++;
          currentChar = 0;
          if (currentPara < content.letter.length) {
            tempDisplay.push('');
            setTimeout(typeNextChar, 500); // Pause between paragraphs
          } else {
            setIsTyping(false);
          }
        }
      };

      typeNextChar();

      return () => {
        isActive = false;
      };
    }
  }, [isInView]);

  return (
    <section className="py-24 px-4 bg-[#FDF8EE] flex justify-center relative overflow-hidden" ref={ref}>
      {/* Decorative Pastel Ambient Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFE4E8]/45 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#EDE9FE]/45 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl w-full relative z-10">
        {/* 3D Clay Letter Tablet (Clayful Aesthetic) */}
        <div className="w-full bg-[#FFFDF9] rounded-[2.5rem] sm:rounded-[3rem] shadow-[10px_10px_24px_rgba(166,155,145,0.22),_-10px_-10px_24px_rgba(255,255,255,1),_inset_-4px_-4px_8px_rgba(166,155,145,0.1),_inset_4px_4px_8px_rgba(255,255,255,0.95)] p-8 sm:p-12 md:p-14 relative border-2 border-white">
          
          {/* 3D Clay Pastel Washi Tape */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-[#EDE9FE] shadow-[2px_3px_6px_rgba(166,155,145,0.22),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(139,92,246,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-purple-200/80 rotate-1 z-20 pointer-events-none" />

          {/* 3D Clay Heart Pin Badge */}
          <div className="absolute top-5 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-[#FFE4E8] flex items-center justify-center shadow-[3px_3px_8px_rgba(166,155,145,0.2),_-2px_-2px_6px_rgba(255,255,255,1),_inset_-1px_-1px_2px_rgba(225,29,72,0.15),_inset_1px_1px_2px_rgba(255,255,255,0.95)] border border-white z-20 select-none">
            <HeartHandshake size={24} className="text-[#FB7185]" />
          </div>
          
          {/* Letter Header Bar */}
          <div className="mb-8 sm:mb-10 border-b-2 border-stone-200/60 pb-5 flex flex-wrap justify-between items-center gap-3 relative z-10">
            <div className="bg-[#FFE4E8] text-[#FB7185] px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-wider shadow-[1px_1px_3px_rgba(166,155,145,0.15),inset_1px_1px_2px_rgba(255,255,255,0.9)] border border-rose-200/60">
              Surat Spesial Buat Lu
            </div>
            <span className="font-body font-extrabold text-base text-[#FB7185] tracking-wide pr-12 sm:pr-14">
              Bestie Forever ✨
            </span>
          </div>

          {/* Letter Typing Body (Modern Chunky Playful Typography) */}
          <div className="space-y-6 font-body text-[#5A4036] text-base sm:text-lg md:text-xl leading-[1.8] relative z-10 min-h-[40vh]">
            {displayedText.map((text, idx) => (
              <p 
                key={idx} 
                className={idx === 0 ? "text-2xl sm:text-3xl font-extrabold text-[#FB7185] mb-6 leading-snug drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]" : "font-medium"}
              >
                {text}
                {isTyping && idx === displayedText.length - 1 && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7 }}
                    className="inline-block w-1.5 h-5 sm:h-6 bg-[#FB7185] ml-1.5 align-middle rounded-full shadow-sm"
                  />
                )}
              </p>
            ))}
            
            {!isTyping && displayedText.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="pt-8"
              >
                <p className="font-body font-extrabold text-lg sm:text-2xl text-[#FB7185] text-right drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                  Dari sohib lu yang selalu dukung lu.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
