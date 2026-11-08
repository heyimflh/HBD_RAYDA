import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      
      // Attempt autoplay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Auto-play prevented", error);
          setShowPrompt(true); // Only show prompt if browser blocked autoplay
        });
      }
      
      const handlePause = () => setIsPlaying(false);
      audioRef.current.addEventListener('pause', handlePause);
      const handlePlay = () => setIsPlaying(true);
      audioRef.current.addEventListener('play', handlePlay);
      
      return () => {
        audioRef.current?.removeEventListener('pause', handlePause);
        audioRef.current?.removeEventListener('play', handlePlay);
      };
    }
  }, []);

  const togglePlay = () => {
    setShowPrompt(false);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };



  return (
    <>
      <audio ref={audioRef} src={content.music.src} loop />
      
      {/* 3D Floating Clay Music Player Button */}
      <div 
        onClick={togglePlay}
        className="fixed bottom-5 right-5 z-50 pointer-events-auto cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[4px_4px_12px_rgba(166,155,145,0.25),_-4px_-4px_12px_rgba(255,255,255,1),_inset_-2px_-2px_4px_rgba(166,155,145,0.12),_inset_2px_2px_4px_rgba(255,255,255,0.95)] border-2 border-white hover:scale-110 active:scale-95 transition-transform group"
        title={isPlaying ? "Jeda Musik" : "Putar Musik"}
      >
        <div className="flex items-end justify-center gap-[3px] h-5 w-5 drop-shadow-sm">
          {isPlaying ? (
            <>
              <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#FB7185] rounded-full" />
              <motion.div animate={{ height: ["70%", "30%", "70%"] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#FB7185] rounded-full" />
              <motion.div animate={{ height: ["30%", "90%", "30%"] }} transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#FB7185] rounded-full" />
              <motion.div animate={{ height: ["100%", "50%", "100%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#FB7185] rounded-full" />
            </>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FB7185" className="text-[#FB7185] self-center ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
